<?php
  require_once "db.php";

  /**
   * Use this class to manage user session tokens
   */
  class TokenUtility {
      private $db;

      public function __construct() {
          $this->db = new Database();
      }

      /**
       * Create user session token
       */
      public function createToken($token, $userId, $expires) {
        $this->db->insertTokenQuery(array("token" => $token, "user_id" => $userId, "expires" => $expires));
      }

      /**
       * Check whether the token is valid
       */
      public function checkToken($token) {
        $query = $this->db->selectTokenQuery(array("token" => $token));

        /**
         * If the query was executed successfully we can check whether the token is valid and
         * to return the user's  data
         */
        if($query["success"]) {
            /**
             * $query["data"] holds a PDO object with the result of the executed query.
             * We can get the data from the returned result as associative array, calling
             * the fetch(PDO::FETCH_ASSOC) method on $query["data"].
             */
            $userToken = $query["data"]->fetch(PDO::FETCH_ASSOC);

            /**
             * If there wasn't found a token variable $userToken will be null
             */
            if($userToken) {
                /**
                 * We check whether the token has expired
                 * If the token is still valid, we get the user's data
                 */
                if($userToken["expires"] > time()) {
                    $query = $db->selectUserByIdQuery(array("id" => $userToken["user_id"]));

                    /**
                     * If the query was executed successfully we can return user's data
                     */
                    if($query["success"]) {
                        /**
                         * $query["data"] holds a PDO object with the result of the executed query.
                         * We can get the data from the returned result as associative array, calling
                         * the fetch(PDO::FETCH_ASSOC) method on $query["data"].
                         */
                        $foundUser = $query["data"]->fetch(PDO::FETCH_ASSOC);

                        $user = new User($foundUser["username"],  $foundUser["password"]);
                        $user->setEmail($foundUser["email"]);

                        return array("success" => true, "user" => $user);
                    } else {
                        return array("success" => false, "error" => $query["error"]);
                    }
                } else {
                    return array("success" => false, "error" => "Вашата сесия е изтекла.");
                }
            } else {
                return array("success" => false, "error" => "Вашата сесия е изтекла.");
            }
        } else {
            return array("success" => false, "error" => $query["error"]);
        }
    }
  }
?>
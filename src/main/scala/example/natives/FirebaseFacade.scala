package example.natives

import scala.scalajs.js

object Firebase {

  @js.native
  trait Error extends js.Object {
    var code: String = js.native
    var message: String = js.native
  }

  @js.native
  trait UserInfo extends js.Object {
    var displayName: String = js.native
    var email: String = js.native
    var photoURL: String = js.native
    var providerId: String = js.native
    var uid: String = js.native
  }

  @js.native
  trait User extends js.Object with UserInfo {

  }

  @js.native
  trait FirebasePromise[+A] extends js.Promise[A]

  @js.native
  trait FirebaseAuth extends js.Object {

    var currentUser: js.UndefOr[User] = js.native

    def signInWithEmailAndPassword(email: String, password: String): FirebasePromise[User] = js.native
  }

  @js.native
  trait FirebaseSingleton extends js.Object {

    val SDK_VERSION: String = js.native

    def initializeApp(config: js.Dictionary[String], name: String = ???): Unit = js.native

    def auth(): FirebaseAuth = js.native

  }

  @js.native
  object Instance extends js.GlobalScope {
    val firebase: FirebaseSingleton = js.native
  }

}
package example.actions

import example.natives._
import example.views.{BlankPage, LoginPage}
import example.{DomAction, DomRouter}
import org.scalajs.dom
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js.annotation._
import scala.scalajs.js

/**
  * Created by hussachai.puripunpin on 7/23/16.
  */
@JSExport
object LoginAction extends DomAction {

  @JSExport
  def login(s: String): Unit = {
    dom.console.log(s"Login: $s")
    dom.console.log(firebase.SDK_VERSION)
    $("#login-form :input").each{ (i: Int, elem: dom.Element) =>
//      println(elem.getAttribute("id"))
    }
    val email = $("#email").value.toString
    val password = $("#password").value.toString
    firebase.auth().signInWithEmailAndPassword(email, password).toFuture.map{ user =>
      dom.console.log("Email: " + user.email)
      DomRouter.goto(BlankPage)
    }.recover{case error => dom.console.log(error.toString)}
  }

}

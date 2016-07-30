package example.views

import example.DomPage
import org.scalajs.dom
import scala.scalajs.js.annotation.JSExport
import scalatags.JsDom.all._
import example.actions.LoginAction
/**
  * Created by hussachai.puripunpin on 7/22/16.
  */

object LoginPage extends DomPage {

  def createForm() = form(id := "login-form", role := "form")(
    fieldset(
      div(`class` := "form-group")(
        input(`class` := "form-control", placeholder := "Email", id := "email", `type` := "email", autofocus)
      ),
      div(`class` := "form-group")(
        input(`class` := "form-control", placeholder := "Password", id := "password", `type` := "password")
      ),
      div(`class` := "checkbox")(
        label(
          input(name := "remember", `type` := "checkbox", value := "Remember Me"), "Remember Me"
        )
      ),
      a(href := "javascript:void(0);", `class` := "btn btn-lg btn-success btn-block", onclick := call("login", "Hello"))("Login")
    )
  )

  def toElement() = div(`class`:="container")(
    div(`class`:="row")(
      div(`class`:="col-md-4 col-md-offset-4")(
        div(`class`:="login-panel panel panel-default")(
          div(`class`:="panel-heading")(
            h3(`class`:="panel-title")("Please Sign In")
          ),
          div(`class`:="panel-body")(
            createForm()
          )
        )
      )
    )
  )

}


















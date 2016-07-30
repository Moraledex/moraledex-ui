package example.actions

import example.views.LoginPage
import example.{DomAction, DomRouter}
import org.scalajs.dom

import scala.scalajs.js.annotation.JSExport

/**
  * Created by hussachai.puripunpin on 7/23/16.
  */
@JSExport
object BlankAction extends DomAction {

  @JSExport
  def back(): Unit = {
    println("Hello")
    DomRouter.goto(LoginPage)
  }

}

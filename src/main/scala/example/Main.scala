package example

import example.views.{BlankPage, LoginPage}
import example.natives._
import org.scalajs.dom
import org.scalajs.dom.raw.Node
import org.scalajs.dom.{Element, Node}

import scala.scalajs.js
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js.annotation.JSExport
import scalatags.JsDom.all._

@js.native
trait EventName extends js.Object {
  type EventType <: dom.Event
}

object EventName {
  def apply[T <: dom.Event](name: String): EventName { type EventType = T } =
    name.asInstanceOf[EventName { type EventType = T }]

  val onmousedown = apply[dom.MouseEvent]("onmousedown")
}

@js.native
trait ElementExt extends js.Object {
  def addEventListener(name: EventName)(
      f: js.Function1[name.EventType, _]): Unit
}


object Main extends js.JSApp {

  @JSExport
  def addClickedMessage(): Unit = {
    appendPar(dom.document.body, "You clicked the button!")
  }

  def appendPar(targetNode: dom.Node, text: String): Unit = {
    val parNode = dom.document.createElement("p")
    val textNode = dom.document.createTextNode(text)
    parNode.appendChild(textNode)
    targetNode.appendChild(parNode)
  }

  def main(): Unit = {

    val config = js.Dictionary(
      "apiKey"        -> "",
      "authDomain"    -> "scalajs-template.firebaseapp.com",
      "databaseURL"   -> "https://scalajs-template.firebaseio.com",
      "storageBucket" -> "scalajs-template.appspot.com"
    )
    firebase.initializeApp(config)
    dom.console.log(firebase.auth().currentUser)
    DomRouter.init(LoginPage)

  }

  /** Computes the square of an integer.
   *  This demonstrates unit testing.
   */
  def square(x: Int): Int = x*x
}

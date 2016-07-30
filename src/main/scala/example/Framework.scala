package example

import example.views.LoginPage
import org.scalajs.dom
import org.scalajs.dom.html.Element
import example.natives._

import scalatags.JsDom._
import scalatags.JsDom.all.id
import scalatags.JsDom.TypedTag
import scala.collection.mutable
import scala.scalajs.js
import scala.scalajs.js.annotation.JSExport
import org.scalajs.jquery.jQuery

/**
  * Created by hussachai.puripunpin on 7/22/16.
  */
trait DomPage {

  lazy val render: dom.raw.Node = toElement().render

  def getId(): Class[_ <: DomPage] = getClass

  def toElement(): TypedTag[Element]

  def call(name: String, args: Any*): String = {
    val argsStr = args.map{ arg =>
      arg match {
        case s: String => s"'$s'"
        case null => "null"
        case _ => arg.toString
      }
    }.mkString(",")
    "example.actions." + getClass.getSimpleName.stripSuffix("Page") + s"Action().$name($argsStr)"
  }

  def bind(input: TypedTag[dom.html.Input]): TypedTag[dom.html.Input] = {
    //TODO: figure out how to modify tag
    input
  }

}

trait DomAction {

  val $ = jQuery

}

@JSExport
object DomRouter {

  private val container = dom.document.getElementById("wrapper")

  private var currentPage: DomPage = null

  @JSExport
  def init[Page <: DomPage](page: Page): Unit = {
    currentPage = page
    container.appendChild(currentPage.render)
  }

  @JSExport
  def goto(page: DomPage): Unit = {
    if(firebase.auth().currentUser.isEmpty) {
      container.replaceChild(LoginPage.render, currentPage.render)
      currentPage = LoginPage
    } else {
      container.replaceChild(page.render, currentPage.render)
      currentPage = page
    }
  }

}

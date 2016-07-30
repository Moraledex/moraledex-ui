package example.views

import example.DomPage

import scalatags.JsDom.all._

/**
  * Created by hussachai.puripunpin on 7/23/16.
  */
object BlankPage extends DomPage {

  def toElement() = div(`class`:="row")(
    p("Hello World"),
    a("Back", `class`:="btn btn-default", onclick:=call("back"))
  )
}

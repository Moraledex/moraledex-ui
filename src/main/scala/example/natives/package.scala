package example

import example.natives.Firebase.FirebaseSingleton

import scala.scalajs.js

/**
  * Created by hussachai.puripunpin on 7/23/16.
  */
package object natives {
  
  lazy val firebase: FirebaseSingleton = Firebase.Instance.firebase
}

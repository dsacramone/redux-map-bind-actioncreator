# redux-smooth-bind-actioncreators
<blockquote>
 <pre><code>
Reduce the boilerplate of "mapStateToProps" and "mapDispatchToProps" !
</code></pre>


This implentation of connect / bindActionCreator is a quality of life change for my particular usage.
I have more than 1 "store" and each of my pages needs to bind its own actions/states while also
binding dispatch. I don't want to include the functions at the bottom of "n" number of pages
setting up these connects/bindToActionCreators. So, just include this package and 
we should be good to go. You now have "actions", and "state", all wrapped up nicely
for you and no need to have 2 small functions and includes (at top) on each page.

 <pre><code>
So, in short - the goals is to reduce the boilerplate of "mapStateToProps" and "mapDispatchToProps". If you have
these two functions for a file, or two. No worries. But, what if you have 3+ files, that all use this same boilerplate code?
Thus, include this npm module -- and boom. One line at the bottom, and you are good to go!
</code></pre>
</blockquote>

## Simple Directions
<blockquote>
So, lets make things simple.
<ul>
 <li> Include the import at top of file
<li> Write your React class how you wish
<li> Now, when you export, follow this convention.
<li> We are assuming ES6
</ul>
</blockquote>

## Example In Practice
 <pre><code>
import * as Actions             from 'actions/myactions'
import bindMapComponent         from 'redux-map-bind-actioncreators'

class MyReactClass extends Component {
  // all your class logic here
}
export default bindMapComponent(MyReactClass)(Actions)

 </code></pre>
So, in your react class, you can now do 'actions.myFuncName()'.
The dispatch is bound to it.


## I want a custom "actions" name
<blockquote>

Now, you see "actions", that is the default return on props. The example above, I assume you destructed it, ala:
 <pre><code>
const {actions} = this.props
 </code></pre>

But if you want to denote the 'actions' another way, just do this:
 <pre><code>
export default bindMapComponent(MyReactClass, "MYACTIONS")(Actions)
 </code></pre>

In Short:
<ul>
 <li> default is "actions", you don't have to pass it.
<li>You want a custom name, pass it in with your class name, as the second arg. now we have: MYACTIONS.myFuncName()
<li>note: in the examples I use "actions.myFuncName()" or "MYACTIONS.myFuncName()". We assume destructring off of the props.
</blockquote>




# redux-smooth-bind-actioncreators
 <pre><code>
This implentation of connect / bindActionCreator is a quality of life change for my particular usage.
I have more than 1 "store" and each of my pages needs to bind its own actions while also 
binding dispatch. 
 </code></pre>

## Simple Directions
 <pre><code>
So, lets make things simple.
1. Include the import at top of file
2. Write your React class how you wish
3. Now, when you export, follow this convention.
export default bindMapComponent(MyReactClass)(Actions)

So, in a nutshell, your file would look something like the following. (see example in practice)
 </code></pre>
## Example In Practice
 <pre><code>
import * as Actions             from 'actions/myactions'
import bindMapComponent         from 'redux-smooth-bind-actioncreators'

class MyReactClass extends Component {
  // all your class logic here
}
export default bindMapComponent(MyReactClass)(Actions)
So, in your react class, you can now do 'actions.myFuncName()'. The dispatch is bound to it.
 </code></pre>

## I want a custom "actions" name
 <pre><code>

Now, you see "actions", that is the default return on props. The example above, I assume you destructed it, ala:
const {actions} = this.props
But if you want to denote the 'actions' another way, just do this:

export default bindMapComponent(MyReactClass, "MYACTIONS")(Actions)

So =>
1. default is "actions", you don't have to pass it.
2. You want a custom name, pass it in with your class name, as the second arg. now we have: MYACTIONS.myFuncName()
 </code></pre>




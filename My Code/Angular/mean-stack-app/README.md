**Break Down**

**File Structure**

```
(a)app modules ts--registers all the modules in our application.

  It has providers,

  all component declarations must as well be in the app module ts

  We also have got the main bootstrapped component.

  Imports-If i am importing 3rd party packages, they are stored under the imports.


```


**Angular components**

```

Small and easy to maintain blocks/components of my UI that we can even easily
reuse.

Communication between components


(a)String Interpolation.

Most basic way, It deals with how i output data into my angular template.



(b)Attribute binding.

Always deals with how i can receive data from inside my Component.


<textarea rows="6" [value]="'initalValue'" #textAreaInput></textarea>

Remember also about element references.

It is a way that i can pick an element then get the values from inside my typescript code.


(c)Event Binding.

<button (click)="onAddPost(textAreaInput)">Save Post</button>

(click) is an event.

Add bost is the function that responds to my event inside my typecript code.


(d)Two way Data Binding...Ng Model.

<textarea rows="6" [(ngModel)]="enteredValue"></textarea>

Best way...

It is both Outputting and getting the value .

i can have an Object of many Outputted Values and do a Submit in a very simple way.


```


**Notes By**

```
Mbugua Caleb

```

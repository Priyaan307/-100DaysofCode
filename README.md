#100DaysofCode : 
#Day6 : freeCodeCamp
Learning Outcome from CatPhotoApp :

1.<h1></h1> to <h6></h6>

2.<p></p>

3.<!-- This is Comment in html -->

4.<main></main> => Use main element to identify the main section of page.

5. Nesting : We put the h1, h2, comment, p and other elements inside the main element. This is called nesting. Nested elements should be placed two spaces further to the right of the element they are nested in. This spacing is called indentation and it is used to make HTML easier to read.

6. 

7. <img src= "" alt = "">

10. Anchor Element: <a href="">text</a>

12.

14. target attribute: <a target= "_blank" href="">text</a> => Links open in new tab

15. Section element: <section></section>

19. When we add a lower rank heading element to the page, it's implied that you're starting a new subsection.

20. <ul></ul>

21. <li></li>

22.

23. figure element represents self-contained content and will allow us to associate an image with a caption.
<figure></figure>

24.<figcaption></figcaption>

<em></em> : emphasis element 

25. <ol></ol>

32.<strong></strong>


34.<form></form> :use to collect information from the user.


35. action attribute: indicates where from data should be sent.
Ex: <form action="/submit-url"></form>

37. Input element : The input element allows us several ways to collect data from a web form. Like img elements, input elements are self-closing and do not need closing tags.

38. There are many kinds of inputs we can create using the type attribute. we can easily create a password field, reset button, or a control to let users select a file from their computer. Ex: <input type="text">

39. In order for a form's data to be accessed by the location specified in the action attribute, we must give the text field a name attribute and assign it a value to represent the data being submitted. For example, we could use the following syntax for an email address text field: <input type="text" name="email">.

40. Placeholder text is used to give people a hint about what kind of information to enter into an input. For example, <input type="text" placeholder="Email address">.


41. To prevent a user from submitting our form when required information is missing, we need to add the required attribute to an input element. There's no need to set a value to the required attribute. Instead, just add the word required to the input element, making sure there is space between it and other attributes.
Ex: <input type="text" placeholder="Email address" required>

42. We use the button element to create a clickable button. For example, <button>Click Here</button> creates a button with the text Click Here.The default behavior of clicking a form button without any attributes submits the form to the location specified in the form's action attribute.Ex:
<button type="submit">Submit</button>

44. We can use radio buttons for questions where we want only one answer out of multiple options.
Here is an example of a radio button with the option of cat: <input type="radio"> cat.  

45. ********* label elements  *********
are used to help associate the text for an input element with the input element itself (especially for assistive technologies like screen readers). For example, <label><input type="radio"> cat</label> makes it so clicking the word cat also selects the corresponding radio button.

46. ********  id attribute  *********
 The id attribute is used to identify specific HTML elements. Each id attribute's value must be unique from all other id values for the entire page.

47.

48. Notice that both radio buttons can be selected at the same time. To make it so selecting one radio button automatically deselects the other, both buttons must have a name attribute with the same value.


49. ------------------------------------------- 
If you select the Indoor radio button and submit the form, the form data for the button is based on its name and value attributes. Since your radio buttons do not have a value attribute, the form data will include indoor-outdoor=on, which is not useful when you have multiple buttons.

50. The fieldset element is used to group related inputs and labels together in a web form. fieldset elements are block-level elements, meaning that they appear on a new line.

51. The legend element acts as a caption for the content in the fieldset element. It gives users context about what they should enter into that part of the form. <legend></legend>

52. Forms commonly use checkboxes for questions that may have more than one answer. For example, here's a checkbox with the option of tacos: <input type="checkbox"> tacos.

56. There's another way to associate an input element's text with the element itself. we can nest the text within a label element and add a for attribute with the same value as the input element's id attribute.
Ex: <input id="loving" type="checkbox">
 <label for="loving">Loving</label>

57. Like radio buttons, form data for selected checkboxes are name / value attribute pairs. While the value attribute is optional, it's best practice to include it with any checkboxes or radio buttons on the page.
EX: 
<input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic"> Energetic</label>

61. In order to make a checkbox checked or radio button selected by default, you need to add the checked attribute to it. There's no need to set a value to the checked attribute. Instead, just add the word checked to the input element, making sure there is space between it and other attributes.
<input id="loving" type="checkbox" name="personality" value="loving" checked> <label for="loving">Loving</label>

62. After the main element, add a footer element.
**Login -- HTTP**

**Introduction**

This Widget enables us to add the Login functionality which connects
with server authenticate the application.

**Screen shot**

![](https://media.istockphoto.com/id/1652166108/photo/aerial-view-of-woman-standing-on-top-of-the-mountain-ridge-augstmatthorn.jpg?s=1024x1024&w=is&k=20&c=-tDFkFkCvYkh0ljUmLLl4AK1L6uAmREvPekLFN2uAJI=){width="6.5in" height="3.3826388888888888in"}

**Implementation Steps**

1.  Install the NPM Package

npm i man-components

2.  Import the component to your implementation page

import Login from \'mannai-components \';

3.  Create a div where this component should be placed and add the tag
    to load it.

 \<Login onLogin={handleLogin} /\>

**Properties**

  -----------------------------------------------------------------------
                          **Default Values**      **Description**
  ----------------------- ----------------------- -----------------------
  rememberMe              True/false              Shows or hides remember
                                                  me option

  forgotPassword          True/False              Shows or hide forgot
                                                  password link

                                                  
  -----------------------------------------------------------------------

**Events**

-   **onLogin**

This will be triggered when the submit button is clicked

-   Arguments

    i.  Username

    ii. Password

-   Example

const handleLogin = async (username, password) =\> {

console.log(username, password);

 

};

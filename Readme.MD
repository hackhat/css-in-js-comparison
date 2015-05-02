# css-in-js-comparison

This project will help you to analyze various libraries that allows you to write CSS in JS.

For each lib there is a little example and the generated css formatted using this [tool](http://www.lonniebest.com/formatcss/).


Doesn't work because of some issue with the routing (Check out [here the app](https://rawgit.com/hackhat/css-in-js-comparison/dev/dist/index.html)), you really have to clone and run it with gulp to test it.


## Libraries

**Analyzed:**

 - **[smart-css](https://github.com/hackhat/smart-css):** [source code](./src/client/smart-css), [generated.css](./src/client/smart-css/generated.css);
 - **[RCSS](https://github.com/chenglou/RCSS):** [source code](./src/client/RCSS), [generated.css](./src/client/RCSS/generated.css);
 - **[absurd](https://github.com/krasimir/absurd):** [source code](./src/client/absurd), [generated.css](./src/client/absurd/generated.css);
 - **[react-style](https://github.com/krasimir/react-style) (works, but it doesn't use react-style lib because I couldn't setup):** [source code](./src/client/react-style);
 - **[radium](https://github.com/FormidableLabs/radium):** [source code](./src/client/radium), No CSS output because is all inline;


**Todo:**

 - [jsxstyle](https://github.com/petehunt/jsxstyle);
 - [react-in-style](https://github.com/ericwooley/react-in-style);


**Future:**

 - http://www.smashingmagazine.com/2013/10/21/challenging-css-best-practices-atomic-approach/
 - http://krasimir.github.io/organic-css/



## Temp

Against inline CSS:

 - Also if you want to edit some of these properties in the web inspector, it won't edit all instances of the component;
 - Performance?



## Install

 - Make sure you already have node.js installed;
 - Clone the project in a folder (let's say "css-in-js-comparison");
 - Open a command line and cd into the folder;
 - Run the command `npm install`;



## Run it

 - Run only client side with reload: `gulp` and go to [localhost:8080](http://localhost:8080);

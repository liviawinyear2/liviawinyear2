/*
* littlelink V1
* https://littlelink.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 12/21/2019
*
* Built using:
*
* Skeleton V2.0.4
* Copyright 2014, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 12/29/2014
*/

/* Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––
- Grid
- Base Styles
- Typography
- Links
- Code
- Spacing
- Utilities
*
* You'll find the button css in css/brands.css.
*
*/

/* Grid
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.container {
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.container-left {
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: left;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.column {
  position: center;
  width: 100%;
  float: center;
  box-sizing: border-box;
}

/* For devices larger than 400px */
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0;
  }
}

/* For devices larger than 550px */
@media (min-width: 550px) {
  .container {
    width: 80%;
  }
  .column,
  .columns {
    margin-left: 0;
  }
  .column:first-child,
  .columns:first-child {
    margin-left: 0;
  }
}

/* Base Styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* NOTE
html is set to 62.5% so that all the REM measurements throughout Skeleton
are based on 10px sizing. So basically 1.5rem = 15px :) */

html {
  font-size: 100%;
  color-scheme: light;
}
body {
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}

/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1 {
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 800;
}
h1 {
  font-size: 24px;
  line-height: 64px;
  letter-spacing: 0;
}

/* Larger than phablet */
@media (min-width: 550px) {
  h1 {
    font-size: 48px;
    line-height: 96px;
  }
}

p {
  margin-top: 0;
}

/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a {
  color: #0085ff;
}
a:hover {
  color: #0085ff;
}

/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
code {
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #f1f1f1;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
}
pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre;
}

/* Spacing
–––––––––––––––––––––––––––––––––––––––––––––––––– */
button,
.button {
  margin-bottom: 1rem;
}
input,
textarea,
select,
fieldset {
  margin-bottom: 1.5rem;
}
pre,
blockquote,
dl,
figure,
p,
ol {
  margin-bottom: 2.5rem;
}

/* Utilities
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.u-full-width {
  width: 100%;
  box-sizing: border-box;
}
.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box;
}
.u-pull-right {
  float: right;
}
.u-pull-left {
  float: left;
}

/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */
hr {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  border-width: 0;
  border-top: 1px solid #e1e1e1;
}
/* Radius values:

10%-40%: Squircles
50% (default): True circle
*/
.avatar {
  width: 128px;
  height: 128px;
  object-fit: cover;
  background-position: center;
  border-radius: 50%;
}
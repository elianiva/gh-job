<style>
#loading {
  position: relative;
  width: 234px;
  height: 28px;
  margin: auto;
}

.loading {
  position: absolute;
  top: 0;
  background-color: rgb(89, 100, 224);
  width: 28px;
  height: 28px;
  animation-name: bounce_loading;
  -o-animation-name: bounce_loading;
  -ms-animation-name: bounce_loading;
  -webkit-animation-name: bounce_loading;
  -moz-animation-name: bounce_loading;
  animation-duration: 1.235s;
  -o-animation-duration: 1.235s;
  -ms-animation-duration: 1.235s;
  -webkit-animation-duration: 1.235s;
  -moz-animation-duration: 1.235s;
  animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-direction: normal;
  -o-animation-direction: normal;
  -ms-animation-direction: normal;
  -webkit-animation-direction: normal;
  -moz-animation-direction: normal;
  transform: scale(0.3);
  -o-transform: scale(0.3);
  -ms-transform: scale(0.3);
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
}

#loading__bar-1 {
  left: 0;
  animation-delay: 0.496s;
  -o-animation-delay: 0.496s;
  -ms-animation-delay: 0.496s;
  -webkit-animation-delay: 0.496s;
  -moz-animation-delay: 0.496s;
}

#loading__bar-2 {
  left: 29px;
  animation-delay: 0.6125s;
  -o-animation-delay: 0.6125s;
  -ms-animation-delay: 0.6125s;
  -webkit-animation-delay: 0.6125s;
  -moz-animation-delay: 0.6125s;
}

#loading__bar-3 {
  left: 58px;
  animation-delay: 0.739s;
  -o-animation-delay: 0.739s;
  -ms-animation-delay: 0.739s;
  -webkit-animation-delay: 0.739s;
  -moz-animation-delay: 0.739s;
}

#loading__bar-4 {
  left: 88px;
  animation-delay: 0.8655s;
  -o-animation-delay: 0.8655s;
  -ms-animation-delay: 0.8655s;
  -webkit-animation-delay: 0.8655s;
  -moz-animation-delay: 0.8655s;
}

#loading__bar-5 {
  left: 117px;
  animation-delay: 0.992s;
  -o-animation-delay: 0.992s;
  -ms-animation-delay: 0.992s;
  -webkit-animation-delay: 0.992s;
  -moz-animation-delay: 0.992s;
}

#loading__bar-6 {
  left: 146px;
  animation-delay: 1.1085s;
  -o-animation-delay: 1.1085s;
  -ms-animation-delay: 1.1085s;
  -webkit-animation-delay: 1.1085s;
  -moz-animation-delay: 1.1085s;
}

#loading__bar-7 {
  left: 175px;
  animation-delay: 1.235s;
  -o-animation-delay: 1.235s;
  -ms-animation-delay: 1.235s;
  -webkit-animation-delay: 1.235s;
  -moz-animation-delay: 1.235s;
}

#loading__bar-8 {
  left: 205px;
  animation-delay: 1.3615s;
  -o-animation-delay: 1.3615s;
  -ms-animation-delay: 1.3615s;
  -webkit-animation-delay: 1.3615s;
  -moz-animation-delay: 1.3615s;
}

@keyframes bounce_loading {
  0% {
    transform: scale(1);
    background-color: rgb(89, 100, 224);
  }

  100% {
    transform: scale(0.3);
    background-color: rgb(89, 100, 224);
  }
}

@-o-keyframes bounce_loading {
  0% {
    -o-transform: scale(1);
    background-color: rgb(89, 100, 224);
  }

  100% {
    -o-transform: scale(0.3);
    background-color: rgb(89, 100, 224);
  }
}

@-ms-keyframes bounce_loading {
  0% {
    -ms-transform: scale(1);
    background-color: rgb(89, 100, 224);
  }

  100% {
    -ms-transform: scale(0.3);
    background-color: rgb(89, 100, 224);
  }
}

@-webkit-keyframes bounce_loading {
  0% {
    -webkit-transform: scale(1);
    background-color: rgb(89, 100, 224);
  }

  100% {
    -webkit-transform: scale(0.3);
    background-color: rgb(89, 100, 224);
  }
}

@-moz-keyframes bounce_loading {
  0% {
    -moz-transform: scale(1);
    background-color: rgb(89, 100, 224);
  }

  100% {
    -moz-transform: scale(0.3);
    background-color: rgb(89, 100, 224);
  }
}
</style>

<div id="loading">
  <div id="loading__bar-1" class="loading" />
  <div id="loading__bar-2" class="loading" />
  <div id="loading__bar-3" class="loading" />
  <div id="loading__bar-4" class="loading" />
  <div id="loading__bar-5" class="loading" />
  <div id="loading__bar-6" class="loading" />
  <div id="loading__bar-7" class="loading" />
  <div id="loading__bar-8" class="loading" />
</div>

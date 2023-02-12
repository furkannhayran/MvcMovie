// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification

const options = {

    position: "absolute", // default: '32px'
    top: "0px",
    bottom:"82%",
    right: '15px', // default: '32px'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

function addDarkmodeWidget() {
    const dark = new Darkmode(options);

    dark.showWidget();
}
window.addEventListener('load', addDarkmodeWidget);
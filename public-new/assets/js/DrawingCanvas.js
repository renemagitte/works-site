function DrawingCanvas() {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    
    var sketch = document.querySelector('#sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = canvas.parentNode.offsetWidth;
    canvas.height = canvas.parentNode.offsetHeight;

    var mouse = {x: 0, y: 0};
    var last_mouse = {x: 0, y: 0};
    
    /* Mouse Capturing Work */
    window.addEventListener('mousemove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
        
        mouse.x = e.pageX - 0;
        mouse.y = e.pageY - 0;
    }, false);
    
    
    /* Drawing on Paint App */
    ctx.lineWidth = .2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#7c7c7c';
    
    // canvas.addEventListener('mousemo', function(e) {
    //     canvas.addEventListener('mousemove', onPaint, false);
    // }, false);
    
    // canvas.addEventListener('mouseup', function() {
    //     canvas.removeEventListener('mousemove', onPaint, false);
    // }, false);
    
    var onPaint = function() {
        ctx.beginPath();
        ctx.moveTo(last_mouse.x, last_mouse.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.closePath();
        ctx.stroke();
    };
    
    setTimeout(function() {
        window.addEventListener('mousemove', onPaint, false);
    }, 500);


    window.addEventListener('resize', resize);

    function resize() {
        sketch_style = getComputedStyle(sketch);
        canvas.width = canvas.parentNode.offsetWidth;
        canvas.height = canvas.parentNode.offsetHeight;  
        ctx.lineWidth = .2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#7c7c7c';              
    }
}
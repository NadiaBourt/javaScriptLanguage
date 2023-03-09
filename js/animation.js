    let direction = 1;
    let position = 0;
    let sizeContainerBig = 400;
    let sizeContainerSmall = 50;

    let t = setInterval(move, 20);
        function move()  {
    position = position+direction; //0+1,1+1,2+1,...
    box.style.left = position + 'px';
    box.style.top = position + 'px';
    if (position>sizeContainerBig-sizeContainerSmall){
    direction = -1;     //
        }
   else if (position === 0){
        direction = 1;
        }
    }
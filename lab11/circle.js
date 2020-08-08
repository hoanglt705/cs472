$(document).ready(function () {
    $('#btnStart').click(function (evt) {
        const width = $('#width').val();

        for (let i = 0; i < parseInt($('#circleNum').val()); i++) {
            let circle = $("<div id=" + "'circle" + i + "'" + " class='circle'></div>");
            let pos = randPosition();
            let color = randColor();
            circle.css(
                {
                    width: width + 'px',
                    height: width + 'px',
                    backgroundColor: color
                });
            circle.offset(
                {
                    top: (pos.x + i),
                    left: (pos.y + i)
                }
            );

            const animationIntervalId = animate(circle);

            circle.on('click', () => {
                clearInterval(animationIntervalId)
                circle.remove();
            });

            $("#circles").append(circle);
        }

        function animate(circle) {
            return setInterval(() => {
                const width = circle.width() + 10;
                circle.width(width);
                circle.height(width);
                circle.css('border-radius', width / 2);
            }, parseInt($('#growRate').val()));
        }

        function randPosition() {
            const posx = (Math.random() * (Math.random() * 10 + 50)).toFixed();
            const posy = (Math.random() * (Math.random() * 10 + 50)).toFixed();
            return {
                x: posx,
                y: posy
            };
        }

        function randColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

    });

});
function setupCursor() {
    var prompt = haven.prompt.get();

    function htmlListener( event ) {
        $("#output")[0].scrollTop = $("#output")[0].scrollHeight
    }

    vorple.addEventListener( [ "expectCommand", "expectKeypress" ], htmlListener );

    prompt.addEventListener('lineinputReady', function() {
        if(document.getElementById("cmd") == null) {
            console.log("Setting up cursor.");
            var cmd = document.createElement('div');
            cmd.id = 'cmd';

            var s = document.createElement('span');
            var c = document.createElement('div');
            c.id = 'cursor';

            cmd.appendChild(s);
            cmd.appendChild(c);

            document.getElementById('lineinput').appendChild(cmd);
            var input = document.getElementsByTagName('input')[0];

            var elemText = document.createTextNode('');
            s.appendChild(elemText);

            input.addEventListener('keyup', function() {
                elemText.textContent = this.value;
            }, false);
        } else {
            console.log("Cursor already exists, skipping setup.");
        }
    });
};

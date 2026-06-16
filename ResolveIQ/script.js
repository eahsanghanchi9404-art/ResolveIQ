let step = 1;

function addBotMessage(message){
    document.getElementById("chatbox").innerHTML +=
        `<div class="bot">${message}</div>`;
}

function addUserMessage(message){
    document.getElementById("chatbox").innerHTML +=
        `<div class="user">${message}</div>`;
}

function handleResponse(answer){

    addUserMessage(answer.toUpperCase());

    if(step === 1){

        if(answer === "no"){
            addBotMessage(
                "Please restart your router and check all power cables.<br><br>Did this solve the issue?"
            );
            step = 2;
        }
        else{
            addBotMessage(
                "Can you open any website such as Google?"
            );
            step = 3;
        }
    }

    else if(step === 2){

        if(answer === "yes"){
            addBotMessage(
                "✅ Issue Resolved.<br><br><b>Diagnosis:</b> Router Power Issue"
            );
        }
        else{
            addBotMessage(
                "❌ Issue Not Resolved.<br><br><b>Recommendation:</b> Create Support Ticket.<br><br><b>Diagnosis:</b> Hardware Connectivity Issue"
            );
        }
    }

    else if(step === 3){

        if(answer === "yes"){
            addBotMessage(
                "✅ Internet connection is working.<br><br><b>Diagnosis:</b> Application-Specific Problem"
            );
        }
        else{
            addBotMessage(
                "Please reconnect your WiFi network and try again.<br><br>Did this solve the issue?"
            );
            step = 4;
        }
    }

    else if(step === 4){

        if(answer === "yes"){
            addBotMessage(
                "✅ Connectivity Restored.<br><br><b>Diagnosis:</b> Temporary Network Issue"
            );
        }
        else{
            addBotMessage(
                "❌ Issue Still Exists.<br><br><b>Recommendation:</b> Create Support Ticket.<br><br><b>Diagnosis:</b> Network Connectivity Failure"
            );
        }
    }

    document.getElementById("chatbox").scrollTop =
        document.getElementById("chatbox").scrollHeight;
}
var readline = require('readline');
const colors = require('colors');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('██╗  ██╗ ██████╗ ██╗     ██╗  ██╗   ██████╗  █████╗ ██╗   ██╗    ██████╗ ██████╗  ██████╗ ███████╗    ██╗██╗  ██╗    ██╗   ██╗ ██╗    ██████╗ ███████╗'.bgBrightBlue)
  console.log('██║  ██║██╔═══██╗██║     ██║ ██╔╝   ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝    ██║██║  ██║    ██║   ██║███║   ██╔═████╗╚════██║'.bgBrightBlue)
  console.log("███████║██║   ██║██║     █████╔╝    ██║  ██║███████║ ╚████╔╝     ██║  ██║██║  ██║██║   ██║███████╗    ██║███████║    ██║   ██║╚██║   ██║██╔██║    ██╔╝".bgBrightBlue)
  console.log("██╔══██║██║   ██║██║     ██╔═██╗    ██║  ██║██╔══██║  ╚██╔╝      ██║  ██║██║  ██║██║   ██║╚════██║    ██║╚════██║    ╚██╗ ██╔╝ ██║   ████╔╝██║   ██╔╝ ".bgBrightBlue)
  console.log("██║  ██║╚██████╔╝███████╗██║  ██╗██╗██████╔╝██║  ██║   ██║       ██████╔╝██████╔╝╚██████╔╝███████║    ███████╗██║     ╚████╔╝  ██║██╗╚██████╔╝██╗██║  ".bgBrightBlue)
  console.log("╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝    ╚══════╝╚═╝      ╚═══╝   ╚═╝╚═╝ ╚═════╝ ╚═╝╚═╝  ".bgBrightBlue)
  console.log("\n\n\n\n\n")
  console.log("██╗     ██████╗ ██████╗ ████████╗    ███████╗ ██████╗ ██████╗     ██████╗ ██╗   ██╗██████╗ ██████╗".bgBrightBlue)
  console.log("██║     ╚════██╗╚════██╗╚══██╔══╝    ██╔════╝██╔═████╗██╔══██╗    ╚════██╗██║   ██║╚════██╗██╔══██╗".bgBrightBlue)
  console.log("██║      █████╔╝ █████╔╝   ██║       █████╗  ██║██╔██║██████╔╝     █████╔╝██║   ██║ █████╔╝██████╔╝".bgBrightBlue)
  console.log("██║      ╚═══██╗ ╚═══██╗   ██║       ██╔══╝  ████╔╝██║██╔══██╗     ╚═══██╗╚██╗ ██╔╝ ╚═══██╗██╔══██╗".bgBrightBlue)
  console.log("███████╗██████╔╝██████╔╝   ██║       ██║     ╚██████╔╝██║  ██║    ██████╔╝ ╚████╔╝ ██████╔╝██║  ██║".bgBrightBlue)
  console.log("╚══════╝╚═════╝ ╚═════╝    ╚═╝       ╚═╝      ╚═════╝ ╚═╝  ╚═╝    ╚═════╝   ╚═══╝  ╚═════╝ ╚═╝  ╚═╝".bgBrightBlue)




  rl.question("Please enter the url/ip to down ", function(answer) {
    setInterval(function() {
        var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
        console.log("Used ".yellow +ip.white+ " to DDoS ".yellow +answer.white)
    }, 23)
  
    rl.close();
  });
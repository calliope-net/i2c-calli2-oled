input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Calli2bot.seite2Motor(50, 40, calli2bot.eRL.rechts)
    Calli2bot.seite2Motor(73, 14, calli2bot.eRL.rechts)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    while (Calli2bot.seite9Linienfolger(100, 50, 10)) {
    	
    }
})
let Calli2bot: calli2bot.Calli2bot = null
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
let OLEDtext = oled.new_oledclass(oled.oled_eADDR_OLED(oled.eADDR_OLED.OLED_16x8_x3C))
loops.everyInterval(500, function () {
    Calli2bot.seite4StopandGo(56, 8)
})
basic.forever(function () {
	
})

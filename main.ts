input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    while (Calli2bot.seite9Linienfolger(100, 50, 10)) {
    	
    }
})
function _ (kommentar: string) {
	
}
let laufzeit_ms = 0
let Calli2bot: calli2bot.Calli2bot = null
let OLEDtext = oled.new_oledclass(oled.oled_eADDR_OLED(oled.eADDR_OLED.OLED_16x8_x3C), false, true)
wattmeter.reset(wattmeter.wattmeter_eADDR(wattmeter.eADDR.Watt_x45))
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
OLEDtext.set_eeprom_8x8(oled.oled_eEEPROM_Startadresse(oled.eEEPROM_Startadresse.F000))
OLEDtext.writeText8x16(0, 0, 7, "TYP " + Calli2bot.i2cReadFW_VERSION(calli2bot.eVersion.Typ))
basic.forever(function () {
    if (OLEDtext.geti2cError_OLED() == 0) {
        if (input.runningTime() - laufzeit_ms > 2000) {
            oled.comment("aller 2 Sekunden")
            laufzeit_ms = input.runningTime()
            OLEDtext.writeText8x16(13, 0, 7, "" + Math.round(laufzeit_ms / 1000) + " " + "s", oled.eAlign.rechts)
            OLEDtext.writeText8x16(14, 0, 7, wattmeter.statuszeile(wattmeter.wattmeter_eADDR(wattmeter.eADDR.Watt_x45), wattmeter.eStatuszeile.v), oled.eAlign.rechts)
            OLEDtext.writeText8x16(15, 0, 7, wattmeter.statuszeile(wattmeter.wattmeter_eADDR(wattmeter.eADDR.Watt_x45), wattmeter.eStatuszeile.mA), oled.eAlign.rechts)
        }
    } else {
        basic.setLedColor(0xff0000)
    }
})

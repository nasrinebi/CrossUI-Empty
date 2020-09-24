// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("24.076190476190476em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setMultiLines(true)
                .setValue("     Watershed Charachteristics")
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list11")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"a",
                        "caption":"Bioretention",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Porous Pavement",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"Wet Pond",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"Dry Pond",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"e",
                        "caption":"Green Roof",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"f",
                        "caption":"Rain Barrel",
                        "imageClass":"xui-icon-number6"
                    },
                    {
                        "id":"g",
                        "caption":"Infiltration Trench",
                        "imageClass":"xui-icon-number7"
                    },
                    {
                        "id":"h",
                        "caption":"Infiltration Basin",
                        "imageClass":"xui-icon-number8"
                    },
                    {
                        "id":"i",
                        "caption":"Vegetated Swale",
                        "imageClass":"xui-icon-number9"
                    }
                ])
                .setLeft("22.857142857142858em")
                .setTop("3.8095238095238093em")
                .setWidth("26em")
                .setHeight("15.00952380952381em")
                .setSelMode("multibycheckbox")
                .setLabelSize("8em")
                .setValue("a")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input15")
                .setDirtyMark(false)
                .setLeft("25.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("23.314285714285713em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setMultiLines(true)
                .setValue("          Selected BMPs")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput8")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("12.952380952380953em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Stream")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput9")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("15.238095238095237em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Road")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput27")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Land Ownership")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input37")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("25.066666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("       Bioretention")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input40")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("27.35238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("Porous Pavement")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input43")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("29.63809523809524em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("        Wet Pond")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input46")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("31.923809523809524em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("        Dry Pond")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input49")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("34.285714285714285em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("      Green Roof")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input52")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("36.49523809523809em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("      Rain Barrel")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input55")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("38.78095238095238em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("   Infiltration Trench")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input58")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("41.06666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("   Infiltration Basin")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input61")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("43.42857142857143em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("  Vegetated Swale")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input64")
                .setDirtyMark(false)
                .setLeft("3.0476190476190474em")
                .setTop("22.78095238095238em")
                .setWidth("19.504761904761907em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setValue("   Drainage Area (acre)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input69")
                .setDirtyMark(false)
                .setLeft("15.238095238095237em")
                .setTop("22.78095238095238em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue("  Slope (%)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input72")
                .setDirtyMark(false)
                .setLeft("22.095238095238095em")
                .setTop("22.78095238095238em")
                .setWidth("16.457142857142856em")
                .setLabelSize("8em")
                .setValue("  Impervious (%)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input75")
                .setDirtyMark(false)
                .setLeft("31.238095238095237em")
                .setTop("22.78095238095238em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue(" Soil Group")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input78")
                .setDirtyMark(false)
                .setLeft("38.095238095238095em")
                .setTop("22.78095238095238em")
                .setWidth("14.933333333333334em")
                .setLabelSize("8em")
                .setValue("GW Table (ft)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input81")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("22.78095238095238em")
                .setWidth("15.923809523809524em")
                .setLabelSize("8em")
                .setValue("Road Buffer (ft)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input84")
                .setDirtyMark(false)
                .setLeft("54.095238095238095em")
                .setTop("22.78095238095238em")
                .setWidth("17.21904761904762em")
                .setLabelSize("8em")
                .setValue("Building Buffer (ft)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input41")
                .setDirtyMark(false)
                .setLeft("64em")
                .setTop("22.78095238095238em")
                .setWidth("17.21904761904762em")
                .setLabelSize("8em")
                .setValue("Stream Buffer (ft)")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput48")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("19.80952380952381em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Groundwater")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input129")
                .setDirtyMark(false)
                .setLeft("12.952380952380953em")
                .setTop("34.285714285714285em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input132")
                .setDirtyMark(false)
                .setLeft("12.952380952380953em")
                .setTop("36.57142857142857em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox92")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("25.142857142857142em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox93")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("27.428571428571427em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox94")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("29.714285714285715em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox95")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("32em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox96")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("38.857142857142854em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox97")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("41.142857142857146em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox98")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("43.50476190476191em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox100")
                .setDirtyMark(false)
                .setLeft("40.38095238095238em")
                .setTop("27.428571428571427em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox101")
                .setDirtyMark(false)
                .setLeft("40.38095238095238em")
                .setTop("29.714285714285715em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox102")
                .setDirtyMark(false)
                .setLeft("40.38095238095238em")
                .setTop("32em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox105")
                .setDirtyMark(false)
                .setLeft("40.38095238095238em")
                .setTop("38.857142857142854em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox106")
                .setDirtyMark(false)
                .setLeft("40.38095238095238em")
                .setTop("41.142857142857146em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox107")
                .setDirtyMark(false)
                .setLeft("40.38095238095238em")
                .setTop("43.50476190476191em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input135")
                .setDirtyMark(false)
                .setLeft("23.61904761904762em")
                .setTop("34.285714285714285em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input136")
                .setDirtyMark(false)
                .setLeft("23.61904761904762em")
                .setTop("36.49523809523809em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input139")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("34.285714285714285em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input140")
                .setDirtyMark(false)
                .setLeft("32em")
                .setTop("36.49523809523809em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input143")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("34.285714285714285em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input144")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("36.49523809523809em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input169")
                .setDirtyMark(false)
                .setLeft("47.23809523809524em")
                .setTop("34.285714285714285em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input170")
                .setDirtyMark(false)
                .setLeft("47.23809523809524em")
                .setTop("36.49523809523809em")
                .setWidth("3.8857142857142857em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input171")
                .setDirtyMark(false)
                .setLeft("55.61904761904762em")
                .setTop("34.285714285714285em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input172")
                .setDirtyMark(false)
                .setLeft("55.61904761904762em")
                .setTop("36.49523809523809em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input173")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("34.285714285714285em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input175")
                .setDirtyMark(false)
                .setLeft("73.14285714285714em")
                .setTop("34.285714285714285em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input176")
                .setDirtyMark(false)
                .setLeft("73.14285714285714em")
                .setTop("36.49523809523809em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input214")
                .setDirtyMark(false)
                .setLeft("55.61904761904762em")
                .setTop("38.78095238095238em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input215")
                .setDirtyMark(false)
                .setLeft("55.61904761904762em")
                .setTop("41.06666666666667em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input216")
                .setDirtyMark(false)
                .setLeft("55.61904761904762em")
                .setTop("27.35238095238095em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input220")
                .setDirtyMark(false)
                .setLeft("55.61904761904762em")
                .setTop("29.714285714285715em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input221")
                .setDirtyMark(false)
                .setLeft("55.61904761904762em")
                .setTop("31.923809523809524em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input224")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("25.066666666666666em")
                .setWidth("4.038095238095238em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input225")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("27.35238095238095em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input226")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("29.63809523809524em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input227")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("32em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input228")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("38.78095238095238em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input229")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("41.142857142857146em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input230")
                .setDirtyMark(false)
                .setLeft("64.76190476190476em")
                .setTop("43.42857142857143em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input233")
                .setDirtyMark(false)
                .setLeft("73.14285714285714em")
                .setTop("43.42857142857143em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input236")
                .setDirtyMark(false)
                .setLeft("73.14285714285714em")
                .setTop("27.35238095238095em")
                .setWidth("3.961904761904762em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput153")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("3.8095238095238093em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("DEM")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput154")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("6.095238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Land use")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput155")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Soil")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput156")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("10.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Imperviousness")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button38")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("8.380952380952381em")
                .setCaption("           Run")
                .setImage("{/}img/WIN_20200127_19_29_58_Pro.jpg")
                .setImageClass("xui-icon-xui")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Window will be closed once it is done.",
                            "Running",
                            400,
                            10000
                        ],
                        "method":"message",
                        "event":1,
                        "return":false,
                        "okFlag":"_confirm_yes",
                        "koFlag":"_confirm_no"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button17")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("11.428571428571429em")
                .setCaption("Save")
                .setImage("{/}img/WIN_20200127_19_29_58_Pro.jpg")
                .setImageClass("xui-icon-xui")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Windows will be closed once it is done. ",
                            "Saving",
                            400,
                            3000
                        ],
                        "method":"message",
                        "timeout":200,
                        "resetid":"",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input62")
                .setDirtyMark(false)
                .setLeft("53.25714285714286em")
                .setTop("2.2857142857142856em")
                .setWidth("22.62857142857143em")
                .setLabelSize("10em")
                .setValue("          RSWMM-Cost")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("59.42857142857143em")
                .setTop("4.571428571428571em")
                .setWidth("19.35238095238095em")
                .setHeight("15.542857142857143em")
                .setSrc("{/}img/earth111mod3fafig3.png.png")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput21")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("25.142857142857142em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput46")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("27.428571428571427em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput50")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("29.714285714285715em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">25",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">30",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">35",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput93")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("32em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">5",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">10",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">15",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput120")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("38.857142857142854em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<3",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<4",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<5",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput149")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("41.142857142857146em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<5",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<10",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<15",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput152")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("43.42857142857143em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<3",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<4",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<5",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput157")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("25.142857142857142em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<3",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<4",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<5",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput160")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("27.428571428571427em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput161")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("29.714285714285715em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput164")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("32em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<10",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<15",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<20",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput243")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("38.857142857142854em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<10",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<15",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<20",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput244")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("41.142857142857146em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<10",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<15",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<20",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput247")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("43.42857142857143em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput362")
                .setDirtyMark(false)
                .setLeft("57.904761904761905em")
                .setTop("36.57142857142857em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<30",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<40",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<50",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput394")
                .setDirtyMark(false)
                .setLeft("66.28571428571429em")
                .setTop("25.142857142857142em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">150",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">200",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput427")
                .setDirtyMark(false)
                .setLeft("66.28571428571429em")
                .setTop("29.714285714285715em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">150",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">200",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput428")
                .setDirtyMark(false)
                .setLeft("66.28571428571429em")
                .setTop("32em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">150",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">200",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput429")
                .setDirtyMark(false)
                .setLeft("66.28571428571429em")
                .setTop("38.857142857142854em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">150",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">200",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput430")
                .setDirtyMark(false)
                .setLeft("66.28571428571429em")
                .setTop("41.142857142857146em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">150",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">200",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput571")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("25.142857142857142em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput605")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("29.714285714285715em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">3",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">4",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">5",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput640")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("32em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">3",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">4",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">5",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput641")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("38.857142857142854em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">3",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">4",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">5",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput642")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("41.142857142857146em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">3",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">4",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">5",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput645")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("43.42857142857143em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput647")
                .setDirtyMark(false)
                .setLeft("50.285714285714285em")
                .setTop("25.142857142857142em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<150",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<200",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput689")
                .setDirtyMark(false)
                .setLeft("50.285714285714285em")
                .setTop("43.42857142857143em")
                .setWidth("12.647619047619047em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":"<100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"<150",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"<200",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox948")
                .setDirtyMark(false)
                .setLeft("40.38095238095238em")
                .setTop("25.142857142857142em")
                .setWidth("4.419047619047619em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput700")
                .setDirtyMark(false)
                .setLeft("39.61904761904762em")
                .setTop("27.428571428571427em")
                .setWidth("11.885714285714286em")
                .setLabelSize("7em")
                .setItems([
                    {
                        "id":"a",
                        "caption":">2",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":">3",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":">4",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        functions:{ },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button34_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});
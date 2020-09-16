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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput29")
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
                .setHost(host,"xui_ui_comboinput30")
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
                .setHost(host,"xui_ui_comboinput31")
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
                .setHost(host,"xui_ui_comboinput32")
                .setDirtyMark(false)
                .setLeft("9.142857142857142em")
                .setTop("10.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Imperviousness")
                .setType("file")
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
                .setLeft("26.666666666666668em")
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
                .setLeft("28.952380952380953em")
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
                .setTop("28.952380952380953em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("       Bioretention")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input40")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("32em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("Porous Pavement")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input43")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("35.04761904761905em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("        Wet Pond")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input46")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("38.095238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("        Dry Pond")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input49")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("41.142857142857146em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("      Green Roof")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input52")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("44.19047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("      Rain Barrel")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input55")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("47.23809523809524em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("   Infiltration Trench")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input58")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("50.285714285714285em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("   Infiltration Basin")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input61")
                .setDirtyMark(false)
                .setLeft("-6.857142857142857em")
                .setTop("53.333333333333336em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("  Vegetated Swale")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input64")
                .setDirtyMark(false)
                .setLeft("7.619047619047619em")
                .setTop("25.142857142857142em")
                .setWidth("19.504761904761907em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setValue("   Drainage Area (acre)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input69")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("25.142857142857142em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue("  Slope (%)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input72")
                .setDirtyMark(false)
                .setLeft("26.666666666666668em")
                .setTop("25.142857142857142em")
                .setWidth("16.457142857142856em")
                .setLabelSize("8em")
                .setValue("  Impervious (%)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input75")
                .setDirtyMark(false)
                .setLeft("35.80952380952381em")
                .setTop("25.142857142857142em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue(" Soil Group")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input78")
                .setDirtyMark(false)
                .setLeft("42.59047619047619em")
                .setTop("25.142857142857142em")
                .setWidth("14.933333333333334em")
                .setLabelSize("8em")
                .setValue("GW Table (ft)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input81")
                .setDirtyMark(false)
                .setLeft("50.20952380952381em")
                .setTop("25.142857142857142em")
                .setWidth("15.923809523809524em")
                .setLabelSize("8em")
                .setValue("Road Buffer (ft)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input84")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("25.142857142857142em")
                .setWidth("17.21904761904762em")
                .setLabelSize("8em")
                .setValue("Building Buffer (ft)")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input41")
                .setDirtyMark(false)
                .setLeft("68.4952380952381em")
                .setTop("25.142857142857142em")
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
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox4")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("28.952380952380953em")
                .setWidth("12em")
                .setCaption("<2")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox7")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("32em")
                .setWidth("12em")
                .setCaption("<3")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox8")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("35.04761904761905em")
                .setWidth("12em")
                .setCaption(">25")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox9")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("38.095238095238095em")
                .setWidth("12em")
                .setCaption(">10")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox12")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("47.23809523809524em")
                .setWidth("12em")
                .setCaption("<5")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox13")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("50.285714285714285em")
                .setWidth("12em")
                .setCaption("<10")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox14")
                .setDirtyMark(false)
                .setLeft("19.80952380952381em")
                .setTop("53.333333333333336em")
                .setWidth("12em")
                .setCaption("<5")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input129")
                .setDirtyMark(false)
                .setLeft("19.047619047619047em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input132")
                .setDirtyMark(false)
                .setLeft("19.047619047619047em")
                .setTop("44.19047619047619em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox49")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("28.876190476190477em")
                .setWidth("12em")
                .setCaption("<5")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox50")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("32em")
                .setWidth("12em")
                .setCaption("<2")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox51")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("35.04761904761905em")
                .setWidth("12em")
                .setCaption("<2")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox52")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("38.095238095238095em")
                .setWidth("12em")
                .setCaption("<15")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox57")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("47.23809523809524em")
                .setWidth("12em")
                .setCaption("<15")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox58")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("50.285714285714285em")
                .setWidth("12em")
                .setCaption("<15")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox59")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("53.333333333333336em")
                .setWidth("12em")
                .setCaption("<4")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox92")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("29.02857142857143em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox93")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("32.076190476190476em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox94")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("35.12380952380953em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox95")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("38.17142857142857em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox96")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("47.31428571428572em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox97")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("50.36190476190476em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox98")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("53.40952380952381em")
                .setWidth("12em")
                .setCaption(">0")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox99")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("28.952380952380953em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox100")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("32.076190476190476em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox101")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("35.12380952380953em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox102")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("38.17142857142857em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox105")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("47.31428571428572em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox106")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("50.36190476190476em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox107")
                .setDirtyMark(false)
                .setLeft("45.714285714285715em")
                .setTop("53.40952380952381em")
                .setWidth("12em")
                .setCaption("A-D")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input135")
                .setDirtyMark(false)
                .setLeft("28.19047619047619em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input136")
                .setDirtyMark(false)
                .setLeft("28.19047619047619em")
                .setTop("44.19047619047619em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input139")
                .setDirtyMark(false)
                .setLeft("36.57142857142857em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input140")
                .setDirtyMark(false)
                .setLeft("36.57142857142857em")
                .setTop("44.19047619047619em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input143")
                .setDirtyMark(false)
                .setLeft("44.95238095238095em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input144")
                .setDirtyMark(false)
                .setLeft("44.95238095238095em")
                .setTop("44.19047619047619em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox210")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("28.952380952380953em")
                .setWidth("12em")
                .setCaption(">2")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox211")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("32em")
                .setWidth("12em")
                .setCaption(">2")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox212")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("35.04761904761905em")
                .setWidth("12em")
                .setCaption(">4")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox213")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("38.095238095238095em")
                .setWidth("12em")
                .setCaption(">4")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox214")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("47.23809523809524em")
                .setWidth("12em")
                .setCaption(">4")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox215")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("50.285714285714285em")
                .setWidth("12em")
                .setCaption(">4")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox216")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("53.333333333333336em")
                .setWidth("12em")
                .setCaption(">2")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input169")
                .setDirtyMark(false)
                .setLeft("51.80952380952381em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input170")
                .setDirtyMark(false)
                .setLeft("51.80952380952381em")
                .setTop("44.19047619047619em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox217")
                .setDirtyMark(false)
                .setLeft("60.114285714285714em")
                .setTop("28.952380952380953em")
                .setWidth("12em")
                .setCaption("<100")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox223")
                .setDirtyMark(false)
                .setLeft("59.352380952380955em")
                .setTop("53.333333333333336em")
                .setWidth("12em")
                .setCaption("<100")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox231")
                .setDirtyMark(false)
                .setLeft("78.47619047619048em")
                .setTop("28.952380952380953em")
                .setWidth("12em")
                .setCaption(">100")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox233")
                .setDirtyMark(false)
                .setLeft("78.47619047619048em")
                .setTop("35.04761904761905em")
                .setWidth("12em")
                .setCaption(">100")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox234")
                .setDirtyMark(false)
                .setLeft("78.47619047619048em")
                .setTop("38.095238095238095em")
                .setWidth("12em")
                .setCaption(">100")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox235")
                .setDirtyMark(false)
                .setLeft("78.47619047619048em")
                .setTop("47.161904761904765em")
                .setWidth("12em")
                .setCaption(">100")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox236")
                .setDirtyMark(false)
                .setLeft("78.47619047619048em")
                .setTop("50.20952380952381em")
                .setWidth("12em")
                .setCaption(">100")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input171")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input172")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("44.19047619047619em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input173")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input175")
                .setDirtyMark(false)
                .setLeft("77.71428571428571em")
                .setTop("41.142857142857146em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input176")
                .setDirtyMark(false)
                .setLeft("77.71428571428571em")
                .setTop("44.114285714285714em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input214")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("47.23809523809524em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input215")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("50.285714285714285em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input216")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("32em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input220")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("35.04761904761905em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input221")
                .setDirtyMark(false)
                .setLeft("58.59047619047619em")
                .setTop("38.095238095238095em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox296")
                .setDirtyMark(false)
                .setLeft("68.57142857142857em")
                .setTop("44.19047619047619em")
                .setWidth("12em")
                .setCaption("<30")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input224")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("28.952380952380953em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input225")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("32em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input226")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("35.04761904761905em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input227")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("38.095238095238095em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input228")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("47.23809523809524em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input229")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("50.285714285714285em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input230")
                .setDirtyMark(false)
                .setLeft("67.80952380952381em")
                .setTop("53.333333333333336em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input233")
                .setDirtyMark(false)
                .setLeft("78.4em")
                .setTop("53.25714285714286em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input236")
                .setDirtyMark(false)
                .setLeft("77.63809523809523em")
                .setTop("32em")
                .setWidth("4.647619047619048em")
                .setValue("    NA")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
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
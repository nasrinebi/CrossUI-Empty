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
                .setLeft("-7.619047619047619em")
                .setTop("24.38095238095238em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("       Bioretention")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input40")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("26.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("Porous Pavement")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input43")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("28.952380952380953em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("        Wet Pond")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input46")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("31.238095238095237em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("        Dry Pond")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input49")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("33.523809523809526em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("      Green Roof")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input52")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("35.80952380952381em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("      Rain Barrel")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input55")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("38.095238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("   Infiltration Trench")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input58")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("40.38095238095238em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("   Infiltration Basin")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input61")
                .setDirtyMark(false)
                .setLeft("-7.619047619047619em")
                .setTop("42.666666666666664em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setValue("  Vegetated Swale")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input64")
                .setDirtyMark(false)
                .setLeft("1.5238095238095237em")
                .setTop("21.333333333333332em")
                .setWidth("17.21904761904762em")
                .setLabelSize("8em")
                .setHeight("1.7523809523809524em")
                .setValue("    Drainage Area")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input69")
                .setDirtyMark(false)
                .setLeft("11.428571428571429em")
                .setTop("21.333333333333332em")
                .setWidth("12.647619047619047em")
                .setLabelSize("8em")
                .setValue("  Slope")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input72")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("21.333333333333332em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue("Impervious")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input75")
                .setDirtyMark(false)
                .setLeft("23.61904761904762em")
                .setTop("21.333333333333332em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue(" Soil Group")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input78")
                .setDirtyMark(false)
                .setLeft("30.476190476190474em")
                .setTop("21.333333333333332em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue("GW Table")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input81")
                .setDirtyMark(false)
                .setLeft("37.333333333333336em")
                .setTop("21.333333333333332em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setValue("Road Buffer")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input84")
                .setDirtyMark(false)
                .setLeft("44.19047619047619em")
                .setTop("21.333333333333332em")
                .setWidth("15.695238095238095em")
                .setLabelSize("8em")
                .setValue("Building Buffer")
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
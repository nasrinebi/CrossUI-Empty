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
                .setLeft("16em")
                .setTop("6.095238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("DEM")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput30")
                .setDirtyMark(false)
                .setLeft("16em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Land use")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput31")
                .setDirtyMark(false)
                .setLeft("16em")
                .setTop("10.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Soil")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput32")
                .setDirtyMark(false)
                .setLeft("16em")
                .setTop("12.952380952380953em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Imperviousness")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("12.19047619047619em")
                .setTop("1.5238095238095237em")
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
                        "id":"c",
                        "caption":"Dry Pond",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"c",
                        "caption":"Green Roof",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"c",
                        "caption":"Rain Barrel",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"c",
                        "caption":"Infiltration Trench",
                        "imageClass":"xui-icon-number3"
                    },
                                        {
                        "id":"c",
                        "caption":"Infiltration Basin",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"c",
                        "caption":"Vegetated Swale",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"Rain Garden",
                        "imageClass":"xui-icon-number4"
                    }
                ])
                .setLeft("12.19047619047619em")
                .setTop("19.047619047619047em")
                .setWidth("26em")
                .setSelMode("multibycheckbox")
                .setLabelSize("8em")
                .setLabelCaption("BMPs")
                .setValue("a")
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
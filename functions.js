const FEATURES_COUNT = 4; // projects featured

function foo(index){
    console.log("FOO " + index);

    for(let i = 1; i <= 4; i++){
        let featuredItem = document.getElementsByClassName("featured-" + i.toString())[0];
        let innerContent = document.getElementsByClassName("featured-inner-content-" + i.toString());
        console.log(featuredItem);
        if(index == i){
            console.log("Toggle " + i);
            if (featuredItem.id == "featured-closed"){
                featuredItem.id = "featured-open";

                for (c of innerContent) {
                    c.id = "open-content";
                }
                
            } else {
                featuredItem.id = "featured-closed";
                for (c of innerContent) {
                    c.id = "close-content";
                }
            }
            
        } else {
            featuredItem.id = "featured-closed";
            for (c of innerContent) {
                c.id = "close-content";
            }
        }

    }
    
}
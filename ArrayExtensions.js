  //Array Extension methods
    Array.prototype.pushIfNot=function(itm, comparator){
        var inArray = false;
        if(comparator){
            inArray = this.inArray(itm, comparator);
            if(!inArray){
                this.push(itm);
            }
        }
    };

    Array.prototype.inArray = function(itm, comparator){
        var inArray = this.some(function(i){
            return  comparator.call(null,i,itm);
        });

        //var inArray = this.some.call(this, comparator);
        return inArray;
    };

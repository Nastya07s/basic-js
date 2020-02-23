module.exports = class DepthCalculator {
    calculateDepth(arr, depth) {
        let fl = true;
        if (depth === undefined)
            this.depth = depth = 1;
        arr.forEach((elem) => {
            if(Array.isArray(elem)){
                if(fl){
                    fl = false;
                    depth++;
                }
                this.calculateDepth(elem, depth);
            } 
        });
        this.depth = depth > this.depth ? depth : this.depth;
        depth = 1;
        return this.depth;
    }
};
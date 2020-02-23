const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[position-1] == undefined){
      this.chain = [];
      throw new Error('Error');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.chain.forEach((elem, i) => {
      if (i === 0) {
        str += '( '
      };
      str += elem + ' )~~( ';
      if (i === this.chain.length - 1) {
        str = str.substr(0, str.length - 4);
      };
    });
    this.chain = [];
    return str;
  },
};

module.exports = chainMaker;
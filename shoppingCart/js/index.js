var app = new Vue({
	el: '#app',
	data:{
		list:[
			{
				id:1,
				name:'iphone7',
				price:6188,
				count:1,
				tick:false
			},
			{
				id:2,
				name:'iPad Pro',
				price:5888,
				count:1,
				tick:false
			},
			{
				id:3,
				name:'MacBook Pro',
				price:21488,
				count:1,
				tick:false
			}
		]
	},
	computed:{
		totalPrice: function(){
			var total = 0;
			for(var i=0;i<this.list.length;i++){
				var item = this.list[i];
				total += item.price * item.count;
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		},
		onlyPrice: function(){
			var total = 0;
			for(var i=0;i<this.list.length;i++){
				if(this.list[i].tick === true){
					var item = this.list[i];
					total += item.price * item.count;
				}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},
	methods:{
		handleReduce: function(index){
			if(this.list[index].count ===1) return;
			this.list[index].count--;
		},
		handleAdd: function(index){
			this.list[index].count++;
		},
		handleRemove: function(index){
			this.list.splice(index,1);
		},
		handleOnly: function(index){
			if(this.list[index].tick===true){
				this.list[index].tick = false;
			}else{
				this.list[index].tick = true;
			}
		},
		handleAll: function(){
			for(i=0;i<this.list.length;i++){
				this.list[i].tick = true;
			}
		}
	}
});

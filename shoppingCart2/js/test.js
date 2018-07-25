var app = new Vue({
	el: '#app',
	data:{
		list:[
				[
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
				],
			    [
				    {
						id:1,
						name:'番茄',
						price:5,
						count:1,
						tick:false
					},
					{
						id:2,
						name:'黄瓜',
						price:8,
						count:1,
						tick:false
					},
					{
						id:3,
						name:'卷心菜',
						price:3,
						count:1,
						tick:false
					}
				]		
		]
	},
	methods:{
		handleReduce: function(items){
			if(items.count===1) return;
			items.count--;
		},
		handleAdd: function(items){
			items.count++;
		},
		handleRemove: function(index,indexs){
			this.list[index].splice(indexs,1);
		},
		handleOnly: function(items){
			if(items.tick===true){
				items.tick = false;
			}else{
				items.tick = true;
			}
		},
		handleAll: function(){
			for(var i=0;i<this.list.length;i++){
				for(var j=0;j<this.list[i].length;j++)
					this.list[i][j].tick = true;
			}
		}
	},
	computed:{
		totalPrice: function(){
			var total = 0;
			for(var i = 0;i < this.list.length;i++){
					var item1 = this.list[i];
				for(var j=0;j < this.list[i].length;j++){
					var item2 = item1[j];
					total += item2.price * item2.count;
				}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		},
		onlyPrice: function(){
			var total = 0;
			for(var i = 0;i < this.list.length;i++){
				var item1 = this.list[i];
				for(var j=0;j < this.list[i].length;j++){
					var item2 = item1[j];
					if(item2.tick===true){
						total += item2.price * item2.count;	
					}
				}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	}
});
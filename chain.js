class Chain{

constructor(body1,body2){
    var opt ={
bodyA:body1,
bodyB:body2,
length:100,
stiffness:0.7


    }
this.chain=Constraint.create(opt)
World.add(world,this.chain)

}
display(){
var A=this.chain.bodyA.position
var B=this.chain.bodyB.position
line(A.x,A.y,B.x,B.y)
}
}
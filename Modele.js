module.exports.Point=Point;
module.exports.Joueur=Joueur;

function Point(Coordx, Coordy) {
	this.x=Coordx;
	this.y=Coordy;

};

function Joueur(Point, ws, nexttete) {
	this.Serpent=[Point];

	this.ws=ws;
	this.nexttete=nexttete;
	this.grandir=function(point){
		this.Serpent.push(point);
	};
};
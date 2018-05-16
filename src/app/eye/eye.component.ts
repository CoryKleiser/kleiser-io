import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.css']
})
export class EyeComponent implements OnInit {
  @ViewChild('eyeCanvas') canvasRef: ElementRef;
  eye = {
    'x': 160.65,
    'bottomLineY': 117.81,
    'topLineY': 252,
    'irisY': 177.66,
    'pupilY': 176.4,
  };

  constructor() { }

  ngOnInit() {
    const ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
    this.drawMainTriangle(ctx);
    this.drawEye(ctx);
  }

  drawMainTriangle(ctx) {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#5cdbff';
    // outside
    ctx.beginPath();
    ctx.moveTo(3.15, 315);
    ctx.lineTo(160.65, 63);
    ctx.lineTo(319.5, 315);
    ctx.closePath();
    ctx.stroke();
    // inside
    ctx.beginPath();
    ctx.moveTo(9.9, 311.85);
    ctx.lineTo(160.65, 72);
    ctx.lineTo(311.85, 311.85);
    ctx.lineTo(9.9, 311.85);
    ctx.clip();
    ctx.beginPath()
    for (let i = 0 ; i < 50000 ; i++) {
      const x = Math.random() * 500;
      const y = Math.random() * 500;
      ctx.moveTo(x, y);
      ctx.arc(x, y, 1, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(9.9, 311.85);
    ctx.lineTo(160.65, 72);
    ctx.lineTo(311.85, 311.85);
    ctx.lineTo(9.9, 311.85);
    ctx.stroke();
    ctx.fillStyle = '#ffd2aC';
  }

  eyeOutline(ctx, radius) {
    var rad = radius;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.eye.x, this.eye.bottomLineY, rad, 0.785, 2.356);
    ctx.arc(this.eye.x, this.eye.topLineY, rad, 3.927, 5.4979);
    ctx.stroke();
    ctx.fill();
    for (var e = 1; e < 50; e++) {
      for (var i = 1; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(this.eye.x, this.eye.bottomLineY, rad, 0.785, 2.356);
        ctx.arc(this.eye.x, this.eye.topLineY, rad, 3.927, 5.4979);
        ctx.stroke();
        rad++;
      }
      rad = radius;
    }
  }

  drawEye(ctx) {
    // outline
    var eyeOutlineRadius = 94.5;
    this.eyeOutline(ctx, eyeOutlineRadius);
    // pupil
    ctx.fillStyle = '#38a6a6';
    ctx.beginPath();
    ctx.arc(this.eye.x, this.eye.irisY, 28, 5.4979, 3.927);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.eye.x, this.eye.pupilY, 17.5, 5.4979, 3.927);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(this.eye.x - 14, this.eye.x + 10.5);
    ctx.lineTo(this.eye.x + 14, this.eye.x + 10.5);
    ctx.lineTo(this.eye.x + 21, this.eye.x - 2.1);
    ctx.lineTo(this.eye.x - 21, this.eye.x - 2.1);
    ctx.fill();
    ctx.beginPath()
    ctx.arc(this.eye.x, this.eye.irisY, 15, 0, Math.PI * 2);
    ctx.fillStyle = 'fill';
    ctx.fill();
    ctx.beginPath()
    ctx.arc(this.eye.x, this.eye.irisY, 7, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }


}

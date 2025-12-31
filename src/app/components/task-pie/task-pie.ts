import { Component, Input, AfterViewInit, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task-pie',
  template: `<canvas #pieCanvas width="300" height="300"></canvas>`,
  standalone: true,
})
export class TaskPieComponent implements AfterViewInit, OnChanges {
  @Input() completeCount = 0;
  @Input() incompleteCount = 0;
  @ViewChild('pieCanvas', { static: false }) pieCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges() {
    this.renderChart();
  }

  renderChart() {
    if (!this.pieCanvas) return;
    import('chart.js/auto').then(({ default: Chart }) => {
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.pieCanvas.nativeElement, {
        type: 'pie',
        data: {
          labels: ['Complete', 'Incomplete'],
          datasets: [{
            data: [this.completeCount, this.incompleteCount],
            backgroundColor: ['#3db345', '#e53935'],
            hoverBackgroundColor: ['#2e8b2e', '#b71c1c']
          }]
        },
        options: {
          responsive: false,
        }
      });
    });
  }
}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgScrollbarModule } from "ngx-scrollbar";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRadioModule } from "@angular/material/radio";

import { PatientRoutingModule } from "./patient-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ComponentsModule } from "../shared/components/components.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    chartjsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    NgScrollbarModule,
    MatIconModule,
    MatButtonModule,
    PatientRoutingModule,
    NgApexchartsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatTooltipModule,
    MatRadioModule,
    ComponentsModule,
  ],
})
export class PatientModule {}

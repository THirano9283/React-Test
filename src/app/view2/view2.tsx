import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import styles from './view2.module.css';
import createClassTransformer from '../style-utils';

IgrCategoryChartModule.register();

export default function View2() {
  const classes = createClassTransformer(styles);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("column-layout view-2-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("group_2")}>
              <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Column" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
          <div className={classes("column-layout group_1")}>
            <div className={classes("group_2")}>
              <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Area" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
          <div className={classes("column-layout group_1")}>
            <div className={classes("group_2")}>
              <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Line" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
        </div>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("group_2")}>
              <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Point" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
          <div className={classes("column-layout group_1")}>
            <div className={classes("group_2")}>
              <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Spline" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
          <div className={classes("column-layout group_1")}>
            <div className={classes("group_2")}>
              <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Waterfall" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

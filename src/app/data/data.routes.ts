/**
 * Created by Administrator on 2017/4/13.
 */
/**
 * Created by Administrator on 2017/4/13.
 */
import { DataComponent } from './data.component';
import { DataOperateComponent } from './data-operate/data-operate.component';

export const dataRoutes = [{
  path: '',
  component: DataComponent,
  children: [
    { path: '', redirectTo: 'operate', pathMatch: 'full' },
    { path: 'operate', component: DataOperateComponent }
  ]
}];

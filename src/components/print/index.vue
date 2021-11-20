<template>
  <div id="printcontent" ref="printDom" class="printDom">
    <div class="table-title">
      {{ tableTitle }}
    </div>
    <table border="1px" cellspacing="0" cellpadding="5" class="complex-table">
      <tbody>
        <tr>
          <td colspan="1" rowspan="5">
            订单基础信息
          </td>
          <td colspan="2" class="td-gray">
            业务订单号
          </td>
          <td colspan="3">
            CSYH3124532523
          </td>
          <td colspan="2" class="td-gray">
            创建时间
          </td>
          <td colspan="3">
            2021-06-03 11:32:47
          </td>
        </tr>
        <tr>
          <td colspan="2" class="td-gray">
            客户名称
          </td>
          <td colspan="3">捷联</td>
          <td colspan="2" class="td-gray">
            项目名称
          </td>
          <td colspan="3">HW</td>
        </tr>
        <tr>
          <td colspan="2" class="td-gray">
            产线名称
          </td>
          <td colspan="3">华安天成</td>
          <td colspan="2" class="td-gray">
            授权类型
          </td>
          <td colspan="3">授权码</td>
        </tr>
        <tr>
          <td colspan="2" class="td-gray">
            载体名称
          </td>
          <td colspan="3">98M25</td>
          <td
            colspan="2background-color:rgb(241.241,241)"
            rowspan="2"
            class="td-gray"
          >
            授权数量
          </td>
          <td colspan="3" rowspan="2">
            400
          </td>
        </tr>
        <tr>
          <td colspan="2" class="td-gray">
            状态
          </td>
          <td colspan="3">进行中</td>
        </tr>
        <tr>
          <td colspan="1" rowspan="3">
            订单详细信息
          </td>
          <td colspan="2" class="td-gray">
            激活成功
          </td>
          <td colspan="3">275</td>
          <td colspan="2" class="td-gray">
            剩余数量
          </td>
          <td colspan="3">122</td>
        </tr>
        <tr>
          <td colspan="2" class="td-gray">
            激活失败
          </td>
          <td colspan="3">1</td>
          <td colspan="2" class="td-gray">
            未激活
          </td>
          <td colspan="3">1</td>
        </tr>
        <tr>
          <td colspan="2" class="td-gray">
            授权良率
          </td>
          <td colspan="3">98.69%</td>
          <td colspan="2">日期</td>
          <td colspan="3"></td>
        </tr>
        <tr class="last">
          <td class="td-gray">
            备注
          </td>
          <td colspan="5">
            业务订单备注
          </td>
          <td colspan="2">
            签名确认
          </td>
          <td colspan="3"></td>
        </tr>
      </tbody>
    </table>

    <br />
    <div class="problem-table-title">
      附：出现问题的在线授权单
    </div>
    <el-table
      :data="problemTableData"
      class="problem-table"
      height="250"
      border
      style="width: 100%"
    >
      <el-table-column
        v-for="(col, index) in problemTableCol"
        :key="index"
        :label="col.label"
        :prop="col.prop"
      >
        <template slot-scope="scope">
          {{ scope.row[col.prop] }}
          <!-- {{ problemTableData[index] }} -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { exportData } from '@/api/rjcos/rjcosorder'
export default {
	name: 'Print',
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			data: {},
			tableTitle: this.title || '客户确认单 - 在线授权',
			problemTableData: [
				{
					key1: 11,
					key2: 21,
					key3: 31,
					key4: 41,
					key5: 51,
					key6: 61
				},
				{
					key1: 12,
					key2: 22,
					key3: 32,
					key4: 42,
					key5: 52,
					key6: 62
				},
				{
					key1: 13,
					key2: 23,
					key3: 33,
					key4: 43,
					key5: 53,
					key6: 63
				}
			],
			problemTableCol: [
				{ prop: 'key1', label: '在线授权单号' },
				{ prop: 'key2', label: '序列号' },
				{ prop: 'key3', label: '校验信息' },
				{ prop: 'key4', label: '授权码' },
				{ prop: 'key5', label: '激活时间' },
				{ prop: 'key6', label: '状态' }
			]
		}
	},
	methods: {
		doPrint(data) {
			this.getData(data.id).then(response => {
				this.data = response.data.data
				console.log(this.data)
				this.$nextTick(() => {
					this.printPdf()
				})
			})
		},
		getData(id) {
			// return exportData(id)
		},
		printPdf() {
			//判断iframe是否存在，不存在则创建iframe
			var el = document.getElementById('printcontent')
			var iframe = document.createElement('IFRAME')
			var doc = null
			iframe.setAttribute('id', 'print-iframe')
			iframe.setAttribute(
				'style',
				'position:absolute;width:0px;height:0px;left:-500px;top:-500px;'
			)
			document.body.appendChild(iframe)
			doc = iframe.contentWindow.document
			//这里可以自定义样式
			doc.write(
				'<style media="print">.printDom {width: calc(100% - 40px);text-align:center;margin: 0 20px;}.printDom .table-title {font-size: 32px;text-align: center;margin: 0 20px 10px 20px;}.complex-table {width: 100%;margin: 0 20px;}.complex-table td.td-gray {height: 54px;text-align: center;}.complex-table .td-gray {background: rgb(241, 241, 241);}.printDom .problem-table-title {font-size: 20px;text-align: left;color: rgb(8, 8, 8);margin: 0 20px 10px 20px;}</style>'
			) //解决出现页眉页脚和路径的问题
			doc.write('<div>' + el.innerHTML + '</div>')
			doc.close()
			iframe.contentWindow.focus()

			setTimeout(function() {
				iframe.contentWindow.print()
			}, 50) //解决第一次样式不生效的问题
			if (navigator.userAgent.indexOf('MSIE') > 0) {
				document.body.removeChild(iframe)
			}
		}
	}
}
</script>

<style scoped>
.printDom {
	width: calc(100% - 40px);
	margin: 0 20px;
}
.printDom .table-title {
	font-size: 32px;
	text-align: center;
	margin: 0 20px 10px 20px;
}
.complex-table {
	width: 100%;
	margin: 0 20px;
}
.complex-table td {
	height: 54px;
	text-align: center;
}
.complex-table .td-gray {
	background: rgb(241, 241, 241);
}
.complex-table .last {
	height: calc(54px * 3);
}
.printDom .problem-table-title {
	font-size: 20px;
	text-align: left;
	color: rgb(8, 8, 8);
	margin: 0 20px 10px 20px;
}
.printDom .problem-table {
	width: calc(100% - 40px);
	margin: 0 20px;
}
</style>

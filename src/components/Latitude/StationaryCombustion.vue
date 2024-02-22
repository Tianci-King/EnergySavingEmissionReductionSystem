<template>
  <div class="tableWrap">
    <el-table
        id="StationaryCombustionForm"
        :data="tableData"
        border
        v-loading="loading"
        element-loading-text="表单生成中..."
        :span-method="spanMethod"
        height="auto"
        size='small'
    >
      <el-table-column
          prop="Kind"
          label="类型"
          align="center"
          width="200"
      >
      </el-table-column>
      <el-table-column
          prop="Consumption"
          label="消耗量(t)"
          align="center"
          width="200"
      >
        <template #default="scope">
          <el-input v-model="scope.row.Consumption">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
          prop="Carbon"
          label="CO₂"
          align="center"
          width="200"
      >
        <el-table-column
          prop="Carbon.Emissions"
          label="排放量"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
            prop="Carbon.EmissionsFactors"
            label="排放因子"
            align="center"
            width="100"
        ></el-table-column>
      </el-table-column>
      <el-table-column
          prop="Methane"
          label="CH₄"
          align="center"
          width="200"
      >
        <el-table-column
            prop="Methane.Emissions"
            label="排放量"
            align="center"
            width="100"
        ></el-table-column>
        <el-table-column
            prop="Methane.EmissionsFactors"
            label="排放因子"
            align="center"
            width="100"
        ></el-table-column>
      </el-table-column>
      <el-table-column
          prop="NitrousOxide"
          label="N₂O"
          align="center"
          width="200"
      >
        <el-table-column
            prop="NitrousOxide.Emissions"
            label="排放量"
            align="center"
            width="100"
        ></el-table-column>
        <el-table-column
            prop="NitrousOxide.EmissionsFactors"
            label="排放因子"
            align="center"
            width="100"
        ></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script  setup lang="ts">
import {ref} from "vue";

const loading = ref(false);

const kindList = ref([
    "原煤","洗精煤","其他洗煤","煤制品","型煤","水煤浆","煤粉","焦炭","其他焦化产品","焦炉煤气","高炉煤气","其他煤气","天然气","液化天然气","原油","汽油","煤油","柴油","燃料油","液化石油气","炼厂干气","其他石油制品"
]);

const tableData = ref([
  {
    Kind:kindList.value[0],
    Consumption: 0,
    Carbon: {
      Emissions: 0,
      EmissionsFactors: "缺省",
    },
    Methane: {
      Emissions: 0,
      EmissionsFactors: "缺省",
    },
    NitrousOxide: {
      Emissions: 0,
      EmissionsFactors: "缺省",
    },
  }
])

const spanMethod = ({ row, column, rowIndex, columnIndex }) => {
  // 如果当前列不是组织机构列，则返回 { rowspan: 1, colspan: 1 }，表示该单元格不需要合并
  // if (columnIndex !== 0 && columnIndex !== 1&& columnIndex !== 2  &&columnIndex!==9&&columnIndex!==10) {
  //   return { rowspan: 1, colspan: 1 };
  // }
  if (columnIndex !== 0 && columnIndex !== 1) {
    return { rowspan: 1, colspan: 1 };
  }

  // 如果当前行是该组织机构的第一行，则计算该组织机构的行数，并返回 { rowspan, colspan: 1 }，表示需要合并的行数为 rowspan
  if (
      rowIndex === 0 ||
      row.casename !== tableData.value[rowIndex - 1].casename
  ) {
    const rowCount = tableData.value.filter(
        (i) => i.casename === row.casename
    ).length;
    return { rowspan: rowCount, colspan: 1 };
  }
  // 否则返回 { rowspan: 0, colspan: 0 }，表示该单元格已被上方单元格合并
  return { rowspan: 0, colspan: 0 };
};

</script>
<style lang="less" scoped>
.tableQualityProject {
  height: 100vh;
  width: 100%;
  overflow: auto;
  background-color: #f2f2f2;
  h1 {}
}
.tableWrap {
  width: 100%;
  margin: 0 auto;
  /deep/ .el-table__header th {
    background-color: #409eff!important ; /* 设置表头颜色 */
    color: #fff; /* 设置表头文字颜色 */
    //  background-color:#FAFAFA;
    //  color:#252525;
    border:1px solid;
  }
  /deep/ .el-table .cell {
    // font-weight: 700;
    font-size: 16px;
    padding: 0;
  }
  .gzlWrap {
    // border-bottom:1px solid #dfdfdf;
    &:last-child {
      border-bottom: none;
    }
    span {
      display: inline-block;
      padding: 5px 0;
    }
    .key {
      width: 60%;
    }
    .value {
      width: 40%;
    }
  }

  .selfTableHead {
    display: flex;
    span {
      display: inline-block;
      width: 60px;
    }
  }
}
</style>
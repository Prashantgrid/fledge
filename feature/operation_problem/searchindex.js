Search.setIndex({docnames:["api","architecture","contributing","data","index","intro"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["api.md","architecture.md","contributing.md","data.md","index.md","intro.md"],objects:{"fledge.config":{get_logger:[0,1,1,""]},"fledge.database_interface":{DERData:[0,2,1,""],ElectricGridData:[0,2,1,""],PriceData:[0,2,1,""],ScenarioData:[0,2,1,""],ThermalGridData:[0,2,1,""],connect_database:[0,1,1,""],recreate_database:[0,1,1,""]},"fledge.database_interface.DERData":{ev_charger_timeseries_dict:[0,3,1,""],ev_chargers:[0,3,1,""],fixed_load_timeseries_dict:[0,3,1,""],fixed_loads:[0,3,1,""],flexible_building_model_dict:[0,3,1,""],flexible_buildings:[0,3,1,""],flexible_load_timeseries_dict:[0,3,1,""],flexible_loads:[0,3,1,""],scenario_data:[0,3,1,""]},"fledge.database_interface.ElectricGridData":{electric_grid:[0,3,1,""],electric_grid_ders:[0,3,1,""],electric_grid_line_types:[0,3,1,""],electric_grid_line_types_matrices:[0,3,1,""],electric_grid_lines:[0,3,1,""],electric_grid_nodes:[0,3,1,""],electric_grid_transformers:[0,3,1,""],scenario_data:[0,3,1,""]},"fledge.database_interface.PriceData":{price_timeseries_dict:[0,3,1,""],scenario_data:[0,3,1,""]},"fledge.database_interface.ScenarioData":{parameters:[0,3,1,""],parse_parameters_column:[0,4,1,""],parse_parameters_dataframe:[0,4,1,""],scenario:[0,3,1,""],timesteps:[0,3,1,""]},"fledge.database_interface.ThermalGridData":{scenario_data:[0,3,1,""],thermal_grid:[0,3,1,""],thermal_grid_ders:[0,3,1,""],thermal_grid_lines:[0,3,1,""],thermal_grid_nodes:[0,3,1,""]},"fledge.der_models":{DERModel:[0,2,1,""],DERModelSet:[0,2,1,""],EVChargerModel:[0,2,1,""],FixedDERModel:[0,2,1,""],FixedLoadModel:[0,2,1,""],FlexibleBuildingModel:[0,2,1,""],FlexibleDERModel:[0,2,1,""],FlexibleLoadModel:[0,2,1,""]},"fledge.der_models.DERModel":{active_power_nominal_timeseries:[0,3,1,""],der_name:[0,3,1,""],reactive_power_nominal_timeseries:[0,3,1,""],timesteps:[0,3,1,""]},"fledge.der_models.DERModelSet":{define_optimization_connection_grid:[0,3,1,""],define_optimization_constraints:[0,4,1,""],define_optimization_objective:[0,4,1,""],define_optimization_variables:[0,4,1,""],der_models:[0,3,1,""],der_names:[0,3,1,""],fixed_der_models:[0,3,1,""],fixed_der_names:[0,3,1,""],flexible_der_models:[0,3,1,""],flexible_der_names:[0,3,1,""],timesteps:[0,3,1,""]},"fledge.der_models.EVChargerModel":{active_power_nominal_timeseries:[0,3,1,""],der_name:[0,3,1,""],reactive_power_nominal_timeseries:[0,3,1,""],timesteps:[0,3,1,""]},"fledge.der_models.FixedDERModel":{active_power_nominal_timeseries:[0,3,1,""],define_optimization_connection_grid:[0,4,1,""],define_optimization_constraints:[0,4,1,""],define_optimization_variables:[0,4,1,""],der_name:[0,3,1,""],get_optimization_results:[0,4,1,""],reactive_power_nominal_timeseries:[0,3,1,""],timesteps:[0,3,1,""]},"fledge.der_models.FixedLoadModel":{active_power_nominal_timeseries:[0,3,1,""],der_name:[0,3,1,""],reactive_power_nominal_timeseries:[0,3,1,""],timesteps:[0,3,1,""]},"fledge.der_models.FlexibleBuildingModel":{define_optimization_connection_grid:[0,3,1,""],define_optimization_objective:[0,4,1,""],power_factor_nominal:[0,3,1,""]},"fledge.der_models.FlexibleDERModel":{control_matrix:[0,3,1,""],control_names:[0,3,1,""],control_output_matrix:[0,3,1,""],define_optimization_connection_grid:[0,3,1,""],define_optimization_constraints:[0,4,1,""],define_optimization_objective:[0,4,1,""],define_optimization_variables:[0,4,1,""],disturbance_matrix:[0,3,1,""],disturbance_names:[0,3,1,""],disturbance_output_matrix:[0,3,1,""],disturbance_timeseries:[0,3,1,""],get_optimization_results:[0,4,1,""],output_maximum_timeseries:[0,3,1,""],output_minimum_timeseries:[0,3,1,""],output_names:[0,3,1,""],state_matrix:[0,3,1,""],state_names:[0,3,1,""],state_output_matrix:[0,3,1,""],state_vector_initial:[0,3,1,""]},"fledge.der_models.FlexibleLoadModel":{control_matrix:[0,3,1,""],control_names:[0,3,1,""],control_output_matrix:[0,3,1,""],disturbance_matrix:[0,3,1,""],disturbance_names:[0,3,1,""],disturbance_output_matrix:[0,3,1,""],disturbance_timeseries:[0,3,1,""],output_maximum_timeseries:[0,3,1,""],output_minimum_timeseries:[0,3,1,""],output_names:[0,3,1,""],state_matrix:[0,3,1,""],state_names:[0,3,1,""],state_output_matrix:[0,3,1,""],state_vector_initial:[0,3,1,""]},"fledge.electric_grid_models":{ElectricGridModel:[0,2,1,""],ElectricGridModelDefault:[0,2,1,""],ElectricGridModelOpenDSS:[0,2,1,""],LinearElectricGridModel:[0,2,1,""],LinearElectricGridModelGlobal:[0,2,1,""],PowerFlowSolution:[0,2,1,""],PowerFlowSolutionFixedPoint:[0,2,1,""],PowerFlowSolutionOpenDSS:[0,2,1,""]},"fledge.electric_grid_models.ElectricGridModel":{branch_names:[0,3,1,""],branch_types:[0,3,1,""],branches:[0,3,1,""],der_names:[0,3,1,""],der_power_vector_nominal:[0,3,1,""],der_types:[0,3,1,""],ders:[0,3,1,""],line_names:[0,3,1,""],node_names:[0,3,1,""],node_types:[0,3,1,""],nodes:[0,3,1,""],phases:[0,3,1,""],transformer_names:[0,3,1,""]},"fledge.electric_grid_models.ElectricGridModelDefault":{branch_admittance_1_matrix:[0,3,1,""],branch_admittance_2_matrix:[0,3,1,""],branch_incidence_1_matrix:[0,3,1,""],branch_incidence_2_matrix:[0,3,1,""],der_incidence_delta_matrix:[0,3,1,""],der_incidence_wye_matrix:[0,3,1,""],node_admittance_matrix:[0,3,1,""],node_transformation_matrix:[0,3,1,""],node_voltage_vector_no_load:[0,3,1,""]},"fledge.electric_grid_models.ElectricGridModelOpenDSS":{branch_names:[0,3,1,""],branch_types:[0,3,1,""],branches:[0,3,1,""],der_names:[0,3,1,""],der_power_vector_nominal:[0,3,1,""],der_types:[0,3,1,""],ders:[0,3,1,""],line_names:[0,3,1,""],node_names:[0,3,1,""],node_types:[0,3,1,""],nodes:[0,3,1,""],phases:[0,3,1,""],transformer_names:[0,3,1,""]},"fledge.electric_grid_models.LinearElectricGridModel":{define_optimization_constraints:[0,4,1,""],define_optimization_variables:[0,4,1,""],electric_grid_model:[0,3,1,""],get_optimization_dlmps:[0,4,1,""],get_optimization_limits_duals:[0,4,1,""],get_optimization_results:[0,4,1,""],power_flow_solution:[0,3,1,""],sensitivity_branch_power_1_by_der_power_active:[0,3,1,""],sensitivity_branch_power_1_by_der_power_reactive:[0,3,1,""],sensitivity_branch_power_1_by_power_delta_active:[0,3,1,""],sensitivity_branch_power_1_by_power_delta_reactive:[0,3,1,""],sensitivity_branch_power_1_by_power_wye_active:[0,3,1,""],sensitivity_branch_power_1_by_power_wye_reactive:[0,3,1,""],sensitivity_branch_power_2_by_der_power_active:[0,3,1,""],sensitivity_branch_power_2_by_der_power_reactive:[0,3,1,""],sensitivity_branch_power_2_by_power_delta_active:[0,3,1,""],sensitivity_branch_power_2_by_power_delta_reactive:[0,3,1,""],sensitivity_branch_power_2_by_power_wye_active:[0,3,1,""],sensitivity_branch_power_2_by_power_wye_reactive:[0,3,1,""],sensitivity_loss_active_by_der_power_active:[0,3,1,""],sensitivity_loss_active_by_der_power_reactive:[0,3,1,""],sensitivity_loss_active_by_power_delta_active:[0,3,1,""],sensitivity_loss_active_by_power_delta_reactive:[0,3,1,""],sensitivity_loss_active_by_power_wye_active:[0,3,1,""],sensitivity_loss_active_by_power_wye_reactive:[0,3,1,""],sensitivity_loss_reactive_by_der_power_active:[0,3,1,""],sensitivity_loss_reactive_by_der_power_reactive:[0,3,1,""],sensitivity_loss_reactive_by_power_delta_active:[0,3,1,""],sensitivity_loss_reactive_by_power_delta_reactive:[0,3,1,""],sensitivity_loss_reactive_by_power_wye_active:[0,3,1,""],sensitivity_loss_reactive_by_power_wye_reactive:[0,3,1,""],sensitivity_voltage_by_der_power_active:[0,3,1,""],sensitivity_voltage_by_der_power_reactive:[0,3,1,""],sensitivity_voltage_by_power_delta_active:[0,3,1,""],sensitivity_voltage_by_power_delta_reactive:[0,3,1,""],sensitivity_voltage_by_power_wye_active:[0,3,1,""],sensitivity_voltage_by_power_wye_reactive:[0,3,1,""],sensitivity_voltage_magnitude_by_der_power_active:[0,3,1,""],sensitivity_voltage_magnitude_by_der_power_reactive:[0,3,1,""],sensitivity_voltage_magnitude_by_power_delta_active:[0,3,1,""],sensitivity_voltage_magnitude_by_power_delta_reactive:[0,3,1,""],sensitivity_voltage_magnitude_by_power_wye_active:[0,3,1,""],sensitivity_voltage_magnitude_by_power_wye_reactive:[0,3,1,""]},"fledge.electric_grid_models.LinearElectricGridModelGlobal":{electric_grid_model:[0,3,1,""],power_flow_solution:[0,3,1,""],sensitivity_branch_power_1_by_der_power_active:[0,3,1,""],sensitivity_branch_power_1_by_der_power_reactive:[0,3,1,""],sensitivity_branch_power_1_by_power_delta_active:[0,3,1,""],sensitivity_branch_power_1_by_power_delta_reactive:[0,3,1,""],sensitivity_branch_power_1_by_power_wye_active:[0,3,1,""],sensitivity_branch_power_1_by_power_wye_reactive:[0,3,1,""],sensitivity_branch_power_2_by_der_power_active:[0,3,1,""],sensitivity_branch_power_2_by_der_power_reactive:[0,3,1,""],sensitivity_branch_power_2_by_power_delta_active:[0,3,1,""],sensitivity_branch_power_2_by_power_delta_reactive:[0,3,1,""],sensitivity_branch_power_2_by_power_wye_active:[0,3,1,""],sensitivity_branch_power_2_by_power_wye_reactive:[0,3,1,""],sensitivity_loss_active_by_der_power_active:[0,3,1,""],sensitivity_loss_active_by_der_power_reactive:[0,3,1,""],sensitivity_loss_active_by_power_delta_active:[0,3,1,""],sensitivity_loss_active_by_power_delta_reactive:[0,3,1,""],sensitivity_loss_active_by_power_wye_active:[0,3,1,""],sensitivity_loss_active_by_power_wye_reactive:[0,3,1,""],sensitivity_loss_reactive_by_der_power_active:[0,3,1,""],sensitivity_loss_reactive_by_der_power_reactive:[0,3,1,""],sensitivity_loss_reactive_by_power_delta_active:[0,3,1,""],sensitivity_loss_reactive_by_power_delta_reactive:[0,3,1,""],sensitivity_loss_reactive_by_power_wye_active:[0,3,1,""],sensitivity_loss_reactive_by_power_wye_reactive:[0,3,1,""],sensitivity_voltage_by_der_power_active:[0,3,1,""],sensitivity_voltage_by_der_power_reactive:[0,3,1,""],sensitivity_voltage_by_power_delta_active:[0,3,1,""],sensitivity_voltage_by_power_delta_reactive:[0,3,1,""],sensitivity_voltage_by_power_wye_active:[0,3,1,""],sensitivity_voltage_by_power_wye_reactive:[0,3,1,""],sensitivity_voltage_magnitude_by_der_power_active:[0,3,1,""],sensitivity_voltage_magnitude_by_der_power_reactive:[0,3,1,""],sensitivity_voltage_magnitude_by_power_delta_active:[0,3,1,""],sensitivity_voltage_magnitude_by_power_delta_reactive:[0,3,1,""],sensitivity_voltage_magnitude_by_power_wye_active:[0,3,1,""],sensitivity_voltage_magnitude_by_power_wye_reactive:[0,3,1,""]},"fledge.electric_grid_models.PowerFlowSolution":{branch_power_vector_1:[0,3,1,""],branch_power_vector_2:[0,3,1,""],der_power_vector:[0,3,1,""],loss:[0,3,1,""],node_voltage_vector:[0,3,1,""]},"fledge.electric_grid_models.PowerFlowSolutionFixedPoint":{get_branch_power:[0,4,1,""],get_loss:[0,4,1,""],get_voltage:[0,4,1,""],node_power_vector_delta:[0,3,1,""],node_power_vector_wye:[0,3,1,""]},"fledge.electric_grid_models.PowerFlowSolutionOpenDSS":{branch_power_vector_1:[0,3,1,""],branch_power_vector_2:[0,3,1,""],der_power_vector:[0,3,1,""],get_branch_power:[0,4,1,""],get_loss:[0,4,1,""],get_voltage:[0,4,1,""],loss:[0,3,1,""],node_voltage_vector:[0,3,1,""]},"fledge.thermal_grid_models":{LinearThermalGridModel:[0,2,1,""],ThermalGridModel:[0,2,1,""],ThermalPowerFlowSolution:[0,2,1,""]},"fledge.thermal_grid_models.LinearThermalGridModel":{define_optimization_constraints:[0,4,1,""],define_optimization_objective:[0,4,1,""],define_optimization_variables:[0,4,1,""],get_optimization_dlmps:[0,4,1,""],get_optimization_limits_duals:[0,4,1,""],get_optimization_results:[0,4,1,""],sensitivity_branch_flow_by_der_power:[0,3,1,""],sensitivity_node_head_by_der_power:[0,3,1,""],sensitivity_pump_power_by_der_power:[0,3,1,""],thermal_grid_model:[0,3,1,""],thermal_power_flow_solution:[0,3,1,""]},"fledge.thermal_grid_models.ThermalGridModel":{branch_node_incidence_matrix:[0,3,1,""],branches:[0,3,1,""],der_names:[0,3,1,""],der_node_incidence_matrix:[0,3,1,""],der_thermal_power_vector_nominal:[0,3,1,""],der_types:[0,3,1,""],ders:[0,3,1,""],line_names:[0,3,1,""],node_names:[0,3,1,""],nodes:[0,3,1,""]},"fledge.thermal_grid_models.ThermalPowerFlowSolution":{branch_flow_vector:[0,3,1,""],branch_friction_factor_vector:[0,3,1,""],branch_head_vector:[0,3,1,""],branch_reynold_vector:[0,3,1,""],branch_velocity_vector:[0,3,1,""],der_flow_vector:[0,3,1,""],der_thermal_power_vector:[0,3,1,""],node_head_vector:[0,3,1,""],source_electric_power_cooling_plant:[0,3,1,""],source_electric_power_secondary_pump:[0,3,1,""],source_flow:[0,3,1,""],source_head:[0,3,1,""]},fledge:{config:[0,0,0,"-"],database_interface:[0,0,0,"-"],der_models:[0,0,0,"-"],electric_grid_models:[0,0,0,"-"],thermal_grid_models:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method"},terms:{"9ef697b78876ca8cb008d0790205523724a1a4c1":0,"\u00b9fulli":4,"abstract":[0,1],"break":2,"case":[2,4,5],"class":[0,1,2],"default":0,"float":0,"function":[0,2],"import":1,"matrices\u00b9":4,"model\u00b9":4,"new":[2,5],"public":1,"return":0,"short":2,"static":0,"try":5,DGs:4,For:1,PES:[1,5],The:[0,1,2,4,5],These:1,Use:[2,4],Using:5,With:1,_name:0,_type:0,abbrevi:2,abil:1,abl:1,abov:1,absolute_rough:3,access:[0,1],accord:[0,2,3],account:1,achiev:5,across:1,activ:[0,1,4,5],active_pow:3,active_power_nominal_timeseri:0,adding:1,addit:[1,5],adequ:1,admin:2,admitt:[0,4],advent:1,agenc:1,aggreg:1,aim:1,algorithm:[0,1,4],alia:0,all:[0,1,2],allow:1,along:[1,4],alreadi:1,also:[1,5],amend:1,anaconda:5,analysi:1,ani:[0,2],anyon:2,api:[1,4,5],apparent_pow:3,apparent_power_absolut:3,apparent_power_per_unit:3,appear:2,appli:[0,1],applic:1,approxim:[0,1,4],architectur:[4,5],argument:0,arxiv:0,asia:5,asset:1,associ:1,assum:[1,3],atlanta:[1,5],avoid:2,back:2,barati:5,base:[0,1,2],base_frequ:3,basi:[1,5],becaus:1,been:[1,5],befor:2,behavior:0,being:[0,1],benchmark:1,benefit:1,besss:1,better:5,between:1,both:[1,3],bracket:2,branch:[0,3,4],branch_admittance_1_matrix:0,branch_admittance_2_matrix:0,branch_flow_per_unit_maximum:3,branch_flow_vector:0,branch_flow_vector_maximum:0,branch_friction_factor_vector:0,branch_head_vector:0,branch_incidence_1_matrix:0,branch_incidence_2_matrix:0,branch_nam:0,branch_node_incidence_matrix:0,branch_power_vector_1:0,branch_power_vector_2:0,branch_power_vector_squared_maximum:0,branch_reynold_vector:0,branch_typ:0,branch_velocity_vector:0,bug:2,bugfix:2,build:[0,4],building_model:0,buildingmodel:0,bundl:1,by_calcul:0,by_definit:0,calcul:[0,1],call:1,camelcas:2,can:[0,1,2,3,5],cannot:0,capacit:3,caus:2,central:1,challeng:1,chang:[0,1,2,4,5],charact:2,charg:[1,4],charger:[0,4],check:[2,5],chiller_set_beta:3,chiller_set_cooling_capac:3,chiller_set_delta_temperature_cnd_min:3,chiller_set_evaporation_temperatur:3,choic:0,chosen:1,circuit:0,clone:5,cobmo:[0,5],col:3,collabor:1,column:[0,3],combin:[4,5],command:0,comment:[2,4],commit:2,compani:1,compar:1,compat:1,complex:0,compon:1,comprehend:1,compris:1,comput:1,computation:1,concern:1,conclud:2,concurr:1,conda:5,condit:[0,1,3],conduct:1,confer:5,config:[2,4,5],configur:[0,4],connect:[0,1,3],connect_databas:0,consequ:1,consid:1,consist:0,constraint:[0,1],construct:[0,1],contain:[2,5],content:2,contribut:4,control:1,control_matrix:0,control_nam:0,control_output_matrix:0,cooling_plant_typ:3,cooling_tower_set_reference_temperature_cooling_water_suppli:3,cooling_tower_set_reference_temperature_slop:3,cooling_tower_set_reference_temperature_wet_bulb:3,cooling_tower_set_ventilation_factor:3,cooling_water_delta_temperatur:3,core:[0,1],correspond:0,cost:1,cplex:[1,5],creat:[0,1,2,4,5],creation:1,critic:4,csv:0,csv_path:0,current:3,dai:1,dashboard:1,data:[0,1],data_path:0,databas:[0,1,4],database_connect:0,database_interfac:4,database_path:0,database_schema:0,database_schema_path:0,datafram:0,debug:2,decis:0,decomposit:5,dedic:2,defin:[0,1,2,3],define_optimization_connection_grid:0,define_optimization_constraint:0,define_optimization_object:0,define_optimization_vari:0,definit:[0,1],definition_typ:3,delta:0,demonstr:[1,5],depend:[0,1,5],deploi:1,deploy:1,depth:1,der:[0,1,3,4],der_data:0,der_flow_vector:0,der_incidence_delta_matrix:0,der_incidence_wye_matrix:0,der_model:4,der_nam:[0,3],der_node_incidence_matrix:0,der_power_vector:0,der_power_vector_nomin:0,der_thermal_power_vector:0,der_thermal_power_vector_nomin:0,der_typ:[0,3],derdata:0,deriv:1,dermodel:0,dermodelset:0,describ:1,descript:[2,3],design:1,desir:[0,1],determin:1,develop:[1,2,4,5],diamet:3,dict:0,differ:1,digit:2,dimens:0,direct:0,directli:[0,1],directori:[2,5],discov:5,discuss:[1,2],dispatch:1,distinguish:1,distribut:[0,1,3,5],disturbance_matrix:0,disturbance_nam:0,disturbance_output_matrix:0,disturbance_timeseri:0,dlmp:4,docstr:2,document:1,doe:0,doesn:0,doi:[1,5],domain:1,don:1,dot:2,doubl:2,download:5,dso:1,dss:0,dtype:0,due:[0,5],dure:1,each:[1,3],easi:1,easili:1,editor:1,effici:1,either:1,electr:[0,1,3,4,5],electric_grid:[0,4],electric_grid_d:[0,4],electric_grid_data:0,electric_grid_lin:[0,4],electric_grid_line_typ:[0,4],electric_grid_line_types_matric:[0,4],electric_grid_model:4,electric_grid_nam:3,electric_grid_nod:[0,4],electric_grid_operation_limit_typ:4,electric_grid_transform:[0,4],electric_grid_transformer_typ:4,electricgriddata:0,electricgridmodel:0,electricgridmodeldefault:0,electricgridmodelopendss:0,email:2,enabl:[1,4],end:4,energi:[0,3,4],engin:[4,5],ensur:1,enthalpy_difference_cooling_wat:3,enthalpy_difference_distribution_wat:3,entiti:1,env:5,environ:5,equat:[0,1],equilibrium:5,erron:0,error:[2,5],ess:4,ets_head_loss:3,ev_charg:[0,4],ev_charger_timeseri:4,ev_charger_timeseries_dict:0,evalu:1,evchargermodel:0,everi:2,exact:1,exampl:[1,4],exce:2,except:2,excluded_column:0,exemplari:1,exist:1,expans:1,expect:[0,5],expert:1,explain:2,express:0,extens:0,fals:0,featur:2,fee:1,figur:1,file:[0,1,2],finish:2,first:[1,2],fix:[0,1,2,4,5],fixed_der_model:0,fixed_der_nam:0,fixed_load:[0,4],fixed_load_timeseri:4,fixed_load_timeseries_dict:0,fixeddermodel:0,fixedloadmodel:0,fledg:[1,2,5],flexibl:[0,1,5],flexible_build:0,flexible_building_model_dict:0,flexible_der_model:0,flexible_der_nam:0,flexible_load:[0,4],flexible_load_timeseri:4,flexible_load_timeseries_dict:0,flexiblebuildingmodel:0,flexibledermodel:0,flexibleloadmodel:0,flow:[0,1,3,4],focu:1,follow:[2,5],form:1,format:1,formul:1,foundat:1,framework:[1,5],from:[0,1,2],full:2,fundament:1,further:1,furthermor:1,futur:[1,5],gap:1,gener:[0,3,4,5],get:[0,4],get_branch_pow:0,get_logg:0,get_loss:0,get_optimization_dlmp:0,get_optimization_limits_du:0,get_optimization_result:0,get_voltag:0,git:4,gitflow:2,github:5,given:[0,1],global:[0,4],googl:2,gooi:5,govern:1,graphic:1,grid:[0,1,3,5],ground:3,group:1,grussmann:5,guid:4,guidelin:2,gurobi:[1,5],hackl:5,hamach:[1,5],handl:0,hanif:[1,5],have:[1,3,4,5],head:[3,4],help:4,henc:1,here:1,high:1,highli:1,html:0,http:0,idea:[2,4],identifi:[1,3],ieee:[1,5],ignor:2,implement:[0,1,4,5],improv:[1,2,5],in_per_unit:0,incid:[0,4],includ:[0,1],incompat:5,incur:1,independ:1,index:[0,2],info:2,initi:[0,5],innov:5,input:1,instal:4,instanc:1,instanti:[0,1],instead:2,instruct:1,int64:0,int64index:0,integr:1,intend:2,intens:1,interact:1,interest:1,interfac:[0,1,4],intern:[1,5],invest:1,invok:1,is_phase_1_connect:3,is_phase_2_connect:3,is_phase_3_connect:3,isgt:5,iso:3,issu:[2,4,5],its:1,join:2,keen:[2,5],keep:2,kei:1,keyword:0,kwh:3,languag:1,larg:1,lastli:1,later:1,latest:5,latitud:3,layer:1,layout:1,length:[2,3],letter:2,level:[0,1],licens:1,like:2,limit:3,line:[0,1,2,3],line_nam:[0,3],line_typ:3,linear:[0,4],linearelectricgridmodel:0,linearelectricgridmodelglob:0,linearthermalgridmodel:0,load:[0,1,3,4],local:2,locat:[4,5],log:2,logger:2,longitud:3,loss:[0,1,4],lowercas:2,machin:1,magnitud:0,mai:[0,1,4,5],main:2,maintain:1,major:[1,2],make:[1,2,4],manag:1,manipul:1,margin:[4,5],master:2,match:0,mathemat:1,matric:[0,4],matrix:0,maximum:3,maximum_curr:3,mechan:1,meet:[1,5],memori:1,merg:2,messag:2,method:[0,1,5],methodolog:[1,5],minimum:2,minor:2,model:[0,1,4],model_nam:3,modul:[0,2],more:[1,4],multi:[0,5],multiphas:[1,4],multipl:[0,1,2],must:[0,1],n_phase:3,name:[0,2],nan:0,ndarrai:0,neg:3,nodal:[0,1,4],node:[0,3],node_1_nam:3,node_2_nam:3,node_admittance_matrix:0,node_head_per_unit_maximum:3,node_head_vector:0,node_head_vector_minimum:0,node_nam:[0,3],node_power_vector_delta:0,node_power_vector_wy:0,node_transformation_matrix:0,node_typ:[0,3],node_voltage_vector:0,node_voltage_vector_no_load:0,nomin:[0,3],none:0,normal:5,note:4,notic:4,number:[0,2,3],numer:[1,4,5],object:[0,1,2],obtain:[0,1,4],onc:[1,2],one:[0,1],onli:[0,2,3],opendss:[0,1,4],opendssdirect:0,oper:[0,4,5],optim:[1,4,5],optimization_problem:0,org:0,organ:1,origin:1,other:[0,1],outlin:5,output:[1,2],output_maximum_timeseri:0,output_minimum_timeseri:0,output_nam:0,over:1,overview:1,owner:2,packag:[0,5],panda:[0,5],paper:4,paper_2020_dlmp_combined_thermal_electr:5,paramet:[0,1,2],parameter_nam:0,parameter_valu:0,pars:0,parse_parameters_column:0,parse_parameters_datafram:0,parti:1,pass:[0,1],past:0,path:2,path_to_fledge_repositori:5,path_to_repositori:5,pdf:0,pep8:2,pep:2,per:3,perform:[0,1,5],persist:1,pesgm40551:[1,5],phase:[0,3],pip:5,pipe:3,pipe_flow_per_unit_maximum:3,pipe_velocity_maximum:3,plan:[1,5],pleas:[1,2,4,5],point:[0,1,4],posit:3,possibl:5,power:[0,1,3,4,5],power_decrease_percentage_maximum:3,power_factor_nomin:0,power_flow_solut:0,power_increase_percentage_maximum:3,powerflowsolut:0,powerflowsolutionfixedpoint:0,powerflowsolutionopendss:0,practic:1,prear:5,predefin:1,prefer:1,preliminari:4,prepar:5,preprint:5,presenc:1,present:1,previou:0,price:[0,3,4,5],price_timeseri:[0,4],price_timeseries_dict:0,price_typ:3,price_valu:[0,3],pricedata:0,principl:2,print:2,problem:[4,5],procedur:[1,5],process:1,processor:1,program:1,programm:1,progress:[0,3],project:[2,5],prompt:5,proper:2,propos:1,prototyp:1,provid:[1,5],publish:2,pull:2,pump:4,pump_efficiency_secondary_pump:3,pump_head_cooling_wat:3,pump_head_evapor:3,pumping_total_effici:3,pyomo:4,python:[2,5],qualit:1,quot:2,rather:[0,1],rdbm:1,reactanc:3,reactance_percentag:3,reactiv:0,reactive_pow:3,reactive_power_nominal_timeseri:0,read:1,readili:0,real:5,reason:0,recald:5,reconfigur:1,recreat:0,recreate_databas:0,refer:[1,4],region:5,rel:[1,2],relat:[1,5],releas:4,relev:1,reli:1,remain:2,renew:1,repeatedli:1,replac:[0,1],repositori:[2,4,5],repres:[0,1,5],represent:1,request:2,requir:[0,4,5],research:1,resist:3,resistance_percentag:3,resourc:[0,1,3,4],respect:1,result:[0,1,2,5],results_path:2,review:[1,5],routin:1,row:3,run:[0,1,5],same:3,save:2,scalabl:1,scale:1,scenario:[0,1,4],scenario_data:0,scenario_nam:[0,3],scenariodata:0,schedul:1,schema:0,scientif:1,scipi:0,script:5,second:2,sector:1,see:5,seek:1,select:1,semant:2,send:2,sensit:[0,4],sensitivity_branch_flow_by_der_pow:0,sensitivity_branch_power_1_by_der_power_act:0,sensitivity_branch_power_1_by_der_power_react:0,sensitivity_branch_power_1_by_power_delta_act:0,sensitivity_branch_power_1_by_power_delta_react:0,sensitivity_branch_power_1_by_power_wye_act:0,sensitivity_branch_power_1_by_power_wye_react:0,sensitivity_branch_power_2_by_der_power_act:0,sensitivity_branch_power_2_by_der_power_react:0,sensitivity_branch_power_2_by_power_delta_act:0,sensitivity_branch_power_2_by_power_delta_react:0,sensitivity_branch_power_2_by_power_wye_act:0,sensitivity_branch_power_2_by_power_wye_react:0,sensitivity_loss_active_by_der_power_act:0,sensitivity_loss_active_by_der_power_react:0,sensitivity_loss_active_by_power_delta_act:0,sensitivity_loss_active_by_power_delta_react:0,sensitivity_loss_active_by_power_wye_act:0,sensitivity_loss_active_by_power_wye_react:0,sensitivity_loss_reactive_by_der_power_act:0,sensitivity_loss_reactive_by_der_power_react:0,sensitivity_loss_reactive_by_power_delta_act:0,sensitivity_loss_reactive_by_power_delta_react:0,sensitivity_loss_reactive_by_power_wye_act:0,sensitivity_loss_reactive_by_power_wye_react:0,sensitivity_node_head_by_der_pow:0,sensitivity_pump_power_by_der_pow:0,sensitivity_voltage_by_der_power_act:0,sensitivity_voltage_by_der_power_react:0,sensitivity_voltage_by_power_delta_act:0,sensitivity_voltage_by_power_delta_react:0,sensitivity_voltage_by_power_wye_act:0,sensitivity_voltage_by_power_wye_react:0,sensitivity_voltage_magnitude_by_der_power_act:0,sensitivity_voltage_magnitude_by_der_power_react:0,sensitivity_voltage_magnitude_by_power_delta_act:0,sensitivity_voltage_magnitude_by_power_delta_react:0,sensitivity_voltage_magnitude_by_power_wye_act:0,sensitivity_voltage_magnitude_by_power_wye_react:0,sentenc:2,separ:[1,2],seri:[0,1,4],serv:5,set:[0,1],sgd:3,should:[1,2],signal:1,similarli:1,simul:[1,5],singapor:[1,5],singl:2,size:1,smart:5,softwar:[4,5],solut:[0,3,4],solv:[0,1],solver:1,solver_nam:5,sourc:0,source_electric_power_cooling_pl:0,source_electric_power_secondary_pump:0,source_flow:0,source_head:0,source_node_nam:3,space:1,span:2,spars:0,specifi:1,spmatrix:0,sql:0,sqlite3:0,sqlite:0,squar:0,stabl:[1,2],stage:1,stakehold:1,start:[2,4],state:[1,4],state_matrix:0,state_nam:0,state_output_matrix:0,state_vector_initi:0,statement:4,steadi:4,step:5,stop:2,storag:[1,4],store:[1,2],str:0,string:[0,2],structur:1,studi:[1,5],style:4,subordin:1,subproblem:1,subsystem:1,symbol:2,syntax:0,synthet:5,system:[1,4,5],tabular:1,take:1,taken:[0,2],tap_maximum_voltage_per_unit:3,tap_minimum_voltage_per_unit:3,techniqu:1,technolog:5,techrxiv:5,test:[1,5],than:0,thei:1,thermal:[0,3,4,5],thermal_grid:[0,4],thermal_grid_cooling_plant_typ:4,thermal_grid_d:[0,4],thermal_grid_lin:[0,4],thermal_grid_model:4,thermal_grid_nam:3,thermal_grid_nod:[0,4],thermal_grid_operation_limit_typ:4,thermal_power_flow_solut:0,thermal_power_nomin:3,thermalgriddata:0,thermalgridmodel:0,thermalpowerflowsolut:0,thi:[0,1,2,3,4,5],third:[1,2],through:1,throughout:1,time:[1,2,3,4,5],time_period_power_shift_maximum:3,timeseries_nam:3,timestamp:[2,3],timestep:0,timestep_end:3,timestep_interv:3,timestep_start:3,tmp:0,tmppc2xh6m3:0,tool:[1,2,4],top:1,topic:1,total:0,train:1,transact:5,transform:[0,3],transformer_nam:[0,3],transformer_typ:3,troitzsch:[1,5],trpovski:[1,5],trust:5,tsg:5,tune:1,tupl:0,two:[0,3],type:[0,1,3],unbalanc:[1,4],under:4,underscor:2,understand:5,uniqu:3,unit:3,univers:5,updat:1,upec:5,uppercas:2,usa:[1,5],usag:5,use:2,used:[1,5],useful:4,user:1,using:5,util:[0,1],valid:0,variabl:[0,1,2],vector:0,vehicl:4,verbos:2,version:[4,5],via:[2,4,5],view:1,visual:1,vol:5,voltag:[0,1,3,4],voltage_iteration_limit:0,voltage_magnitude_vector_maximum:0,voltage_magnitude_vector_minimum:0,voltage_no_load_method:0,voltage_per_unit_maximum:3,voltage_per_unit_minimum:3,voltage_toler:0,warn:2,water_dens:3,water_kinematic_viscos:3,well:[0,1,5],were:1,when:[2,5],where:[0,1],wherea:1,which:[1,2,5],wind:3,window:5,with_mean:0,within:1,without:[1,4],word:2,work:[0,1,2,3,5],workaround:5,would:1,write:1,wye:[0,3],xxx:2,yet:5,yield:1,yml:5,you:[2,4,5],your:5,zhang:[1,5]},titles:["API Reference","Software Architecture","Contributing","Database Reference","FLEDGE - Flexible Distribution Grid Demonstrator","Getting Started"],titleterms:{"case":1,"function":1,Use:1,altern:5,api:0,architectur:1,branch:2,config:0,content:4,contribut:[2,5],databas:3,database_interfac:0,demonstr:4,der_model:0,distribut:4,electric_grid:3,electric_grid_d:3,electric_grid_lin:3,electric_grid_line_typ:3,electric_grid_line_types_matric:3,electric_grid_model:0,electric_grid_nod:3,electric_grid_operation_limit_typ:3,electric_grid_transform:3,electric_grid_transformer_typ:3,engin:1,ev_charg:3,ev_charger_timeseri:3,exampl:5,featur:4,fixed_load:3,fixed_load_timeseri:3,fledg:[0,4],flexibl:4,flexible_load:3,flexible_load_timeseri:3,gener:1,get:5,git:2,grid:4,guid:2,instal:5,non:1,oper:1,paper:5,preliminari:1,price_timeseri:3,problem:1,progress:4,quick:5,recommend:5,refer:[0,3],releas:2,requir:1,scenario:3,softwar:1,solut:1,start:5,statement:1,style:2,thermal_grid:3,thermal_grid_cooling_plant_typ:3,thermal_grid_d:3,thermal_grid_lin:3,thermal_grid_model:0,thermal_grid_nod:3,thermal_grid_operation_limit_typ:3,version:2,work:4}})
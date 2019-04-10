create table `propad`.`Propad_Initiate_employee` (
	IE_ID	INT NOT NULL,
	IE_Date	Date not null,
	IE_Emp_id	int not null,
	IE_Emp_name	Varchar(100) not null,
	IE_Emp_email	Varchar(50) not null,
	IE_Emp_DOJ	Date not null,
	IE_Int1	Varchar(100) not null,
	IE_Int2	Varchar(100) not null,
	IE_Status	Varchar(12) not null,
	primary key(ie_id));
	
CREATE TABLE `propad`.`propad_emp_edu_details` (
  `ed_id` INT NOT NULL,
  `ed_ie_id` INT NOT NULL,
  `ed_emp_id` INT NOT NULL,
  `ed_edu_sslc` BLOB NOT NULL,
  `ed_edu_sslc_text` VARCHAR(2000) NULL,
  `ed_edu_hsc` BLOB NULL,
  `ed_edu_hsc_text` VARCHAR(2000) NULL,
  `ed_edu_dip` BLOB NULL,
  `ed_edu_dip_text` VARCHAR(2000) NULL,
  `ed_edu_ug` BLOB NOT NULL,
  `ed_edu_ug_text` VARCHAR(2000) NULL,
  `ed_edu_pg` BLOB NULL,
  `ed_edu_pg_text` VARCHAR(2000) NULL,
  `ed_edu_others` BLOB NULL,
  `ed_edu_others_text` VARCHAR(2000) NULL,
  `ed_edu_comments` VARCHAR(100) NULL,
  PRIMARY KEY (`ed_id`));
  
  CREATE TABLE `propad`.`propad_emp_tech_details` (
  `et_id` INT NOT NULL,
  `et_emp_id` INT NOT NULL,
  `et_tech_cert1` BLOB NULL,
  `et_tech_cert1_text` VARCHAR(2000) NULL,
  `et_tech_cert2` BLOB NULL,
  `et_tech_cert2_text` VARCHAR(2000) NULL,
  `et_tech_cert3` BLOB NULL,
  `et_tech_cert3_text` VARCHAR(2000) NULL,
  `et_tech_cert4` BLOB NULL,
  `et_tech_cert4_text` VARCHAR(2000) NULL,
  `et_tech_cert5` BLOB NULL,
  `et_tech_cert5_text` VARCHAR(2000) NULL,
  `et_tech_comments` VARCHAR(100) NULL,
  PRIMARY KEY (`et_id`));  

CREATE TABLE `propad`.`propad_emp_prof_details` (
  `ep_id` INT NOT NULL,
  `ep_emp_id` INT NULL,
  `ep_service_cert1` BLOB NULL,
  `ep_service_cert1_text` VARCHAR(2000) NULL,
  `ep_service_cert2` BLOB NULL,
  `ep_service_cert2_text` VARCHAR(2000) NULL,
  `ep_service_cert3` BLOB NULL,
  `ep_service_cert3_text` VARCHAR(2000) NULL,
  `ep_payslip1` BLOB NULL,
  `ep_payslip1_text` VARCHAR(2000) NULL,
  `ep_payslip2` BLOB NULL,
  `ep_payslip2_text` VARCHAR(2000) NULL,
  `ep_payslip3` BLOB NULL,
  `ep_payslip3_text` VARCHAR(2000) NULL,
   PRIMARY KEY (`ep_id`)  );

CREATE TABLE `propad`.`propad_emp_per_details` (
  `eper_id` INT NOT NULL,
  `ep_per_emp_id` INT NULL,
  `ep_per_addressproof` BLOB NULL,
  `ep_per_addressproof_text` VARCHAR(2000) NULL,
  `ep_per_pp` BLOB NULL,
  `ep_per_pp_text` VARCHAR(2000) NULL,
  `ep_per_pan` BLOB NULL,
  `ep_per_pan_text` VARCHAR(2000) NULL,
  `ep_per_aadhar` BLOB NULL,
  `ep_per_aadhar_text` VARCHAR(2000) NULL,
  PRIMARY KEY (`eper_id`));

CREATE TABLE `propad`.`propad_emp_validation` (
  `ev_id` INT NOT NULL,
  `ev_emp_id` INT NOT NULL,
  `ev_review_dt` DATE NOT NULL,
  `ev_review_comments` VARCHAR(100) NULL,
  PRIMARY KEY (`ev_id`, `ev_emp_id`));

CREATE TABLE `propad`.`propad_audit_log` (
  `al_id` INT NOT NULL AUTO_INCREMENT,
  `al_ie_id` INT NULL,
  `al_ed_id` INT NULL,
  `al_et_id` INT NULL,
  `al_ep_id` INT NULL,
  `al_eper_id` INT NULL,
  `al_ev_id` INT NULL,
  `al_transaction` VARCHAR(50) NULL,
  `al_page` VARCHAR(50) NULL,
  `al_date` DATE NULL,
  `al_userid` VARCHAR(45) NULL,
  `al_emp_id` INT NOT NULL,
  `al_comments` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`al_id`),
  UNIQUE INDEX `al_id_UNIQUE` (`al_id` ASC));

CREATE TABLE `propad`.`propad_users` (
  `user_uid` INT NOT NULL  AUTO_INCREMENT,
‘user_userid’ Varchar(50) not null,
  `user_email` VARCHAR(50) NOT NULL,
  `user_empid` Varchar(10) NOT NULL,
  `user_dept` VARCHAR(50) NULL,
  `user_role` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`user_uid`, `user_empid`),
  UNIQUE INDEX `user_uid_UNIQUE` (`user_uid` ASC),
  UNIQUE INDEX `user_email_UNIQUE` (`user_email` ASC));







  






	

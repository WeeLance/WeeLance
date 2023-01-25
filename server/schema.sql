-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema weelance
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema weelance
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `weelance` DEFAULT CHARACTER SET utf8mb3 ;
USE `weelance` ;

-- -----------------------------------------------------
-- Table `weelance`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weelance`.`client` (
  `client_id` VARCHAR(100) NOT NULL,
  `company_name` VARCHAR(100) NULL,
  `client_name` VARCHAR(100) NULL,
  `client_email` VARCHAR(100) NULL,
  `phone_number` INT NULL,
      `cl_bio` Text NULL,

  `company_link` VARCHAR(500) NULL,
  `company_adress` VARCHAR(45) NULL,
  PRIMARY KEY (`client_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `weelance`.`freelancer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weelance`.`freelancer` (
  `freelancer_id` VARCHAR(100) NOT NULL,
  `fl_rating` INT(10) UNSIGNED ZEROFILL , 
  `fl_name` VARCHAR(100) , 
  `fl_email` VARCHAR(100),
  `fl_portfolio` VARCHAR(500) ,
  `fl_image` VARCHAR(500) ,
  `fl_phone_number` INT NULL,
    `fl_bio` Text NULL,

  `github_link` VARCHAR(500) NULL,
  `portfolio_link` VARCHAR(500) NULL,
  `category` VARCHAR(100) NULL,
  PRIMARY KEY (`freelancer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `weelance`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weelance`.`feedback` (
  `feedback_id` INT NOT NULL AUTO_INCREMENT,
  `fb-content` VARCHAR(500) NOT NULL,
  `client_client_id` VARCHAR(100) NOT NULL,
  `freelancer_freelancer_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`feedback_id`, `client_client_id`, `freelancer_freelancer_id`),
  INDEX `fk_feedback_client1_idx` (`client_client_id` ASC) VISIBLE,
  INDEX `fk_feedback_freelancer1_idx` (`freelancer_freelancer_id` ASC) VISIBLE,
  CONSTRAINT `fk_feedback_client1`
    FOREIGN KEY (`client_client_id`)
    REFERENCES `weelance`.`client` (`client_id`),
  CONSTRAINT `fk_feedback_freelancer1`
    FOREIGN KEY (`freelancer_freelancer_id`)
    REFERENCES `weelance`.`freelancer` (`freelancer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `weelance`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weelance`.`project` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(100) NULL DEFAULT NULL,
  `project_category` VARCHAR(100) NULL DEFAULT NULL,
  `project_description` VARCHAR(500) NULL DEFAULT NULL,
  `project_status` ENUM('DONE','Not yet','In progress') NULL DEFAULT NULL,
  `client_client_id` VARCHAR(100)  NULL,
  `freelancer_freelancer_id` VARCHAR(100)  NULL,
  PRIMARY KEY (`project_id`),
  INDEX `fk_project_freelancer1_idx` (`freelancer_freelancer_id` ASC) VISIBLE,
  INDEX `fk_project_client1` (`client_client_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_client1`
    FOREIGN KEY (`client_client_id`)
    REFERENCES `weelance`.`client` (`client_id`),
  CONSTRAINT `fk_project_freelancer1`
    FOREIGN KEY (`freelancer_freelancer_id`)
    REFERENCES `weelance`.`freelancer` (`freelancer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `weelance`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weelance`.`skills` (
  `skills_id` INT NOT NULL AUTO_INCREMENT,
  `skill` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`skills_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `weelance`.`skills-fl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weelance`.`skills_fl` (
  `freelancer_freelancer_id` VARCHAR(100) NOT NULL,
  `skills_skills_id` INT NOT NULL,
  PRIMARY KEY (`freelancer_freelancer_id`, `skills_skills_id`),
  INDEX `fk_skills-fl_skills1_idx` (`skills_skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_skills-fl_skills1`
    FOREIGN KEY (`skills_skills_id`)
    REFERENCES `weelance`.`skills` (`skills_id`),
  CONSTRAINT `fk_skills_freelancer1`
    FOREIGN KEY (`freelancer_freelancer_id`)
    REFERENCES `weelance`.`freelancer` (`freelancer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
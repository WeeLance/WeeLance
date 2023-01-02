-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema weeLance
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema weeLance
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `weeLance` DEFAULT CHARACTER SET utf8 ;
USE `weeLance` ;

-- -----------------------------------------------------
-- Table `weeLance`.`freelancer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weeLance`.`freelancer` (
  `freelancer_id` VARCHAR(100) NOT NULL,
  `fl_rating` INT ZEROFILL NOT NULL,
  `fl_portfolio` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`freelancer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weeLance`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weeLance`.`client` (
  `client_id` VARCHAR(100) NOT NULL,
  `company` VARCHAR(45) NULL,
  PRIMARY KEY (`client_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weeLance`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weeLance`.`feedback` (
  `feedback_id` INT NOT NULL AUTO_INCREMENT,
  `fb-content` VARCHAR(500) NOT NULL,
  `client_client_id` VARCHAR(100) NOT NULL,
  `freelancer_freelancer_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`feedback_id`, `client_client_id`, `freelancer_freelancer_id`),
  INDEX `fk_feedback_client1_idx` (`client_client_id` ASC) VISIBLE,
  INDEX `fk_feedback_freelancer1_idx` (`freelancer_freelancer_id` ASC) VISIBLE,
  CONSTRAINT `fk_feedback_client1`
    FOREIGN KEY (`client_client_id`)
    REFERENCES `weeLance`.`client` (`client_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_feedback_freelancer1`
    FOREIGN KEY (`freelancer_freelancer_id`)
    REFERENCES `weeLance`.`freelancer` (`freelancer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weeLance`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weeLance`.`skills` (
  `skills_id` INT NOT NULL AUTO_INCREMENT,
  `skill` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`skills_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weeLance`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weeLance`.`project` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(100) NULL,
  `project_category` VARCHAR(100) NULL,
  `project_description` VARCHAR(500) NULL,
  `project_status` ENUM("DONE", "") NULL,
  `client_client_id` VARCHAR(100) NOT NULL,
  `freelancer_freelancer_id` VARCHAR(100) NOT NULL,
  PRIMARY KEY ( `project_id`,`client_client_id`, `freelancer_freelancer_id`),
  INDEX `fk_project_freelancer1_idx` (`freelancer_freelancer_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_client1`
    FOREIGN KEY (`client_client_id`)
    REFERENCES `weeLance`.`client` (`client_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_freelancer1`
    FOREIGN KEY (`freelancer_freelancer_id`)
    REFERENCES `weeLance`.`freelancer` (`freelancer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weeLance`.`skills-fl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weeLance`.`skills-fl` (
  `freelancer_freelancer_id` VARCHAR(100) NOT NULL,
  `skills_skills_id` INT NOT NULL,
  PRIMARY KEY (`freelancer_freelancer_id`, `skills_skills_id`),
  INDEX `fk_skills-fl_skills1_idx` (`skills_skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_skills_freelancer1`
    FOREIGN KEY (`freelancer_freelancer_id`)
    REFERENCES `weeLance`.`freelancer` (`freelancer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_skills-fl_skills1`
    FOREIGN KEY (`skills_skills_id`)
    REFERENCES `weeLance`.`skills` (`skills_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

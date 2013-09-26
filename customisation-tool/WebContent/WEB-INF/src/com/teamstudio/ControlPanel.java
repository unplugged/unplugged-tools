package com.teamstudio;

import javax.faces.context.FacesContext;
import java.io.Serializable;
import lotus.domino.Database;
import lotus.domino.Document;
import lotus.domino.NotesException;
import lotus.domino.View;

import com.ibm.domino.xsp.module.nsf.NotesContext;


public class ControlPanel implements Serializable {
	private static final long serialVersionUID = 1L;
	public static final String BEAN_NAME = "controlpanelbean"; // name of the bean
	private String registrationNAB;
	private String registrationUsersGroup;
	private String registrationEmailSubject;
	private String registrationEmailBody;
	private String registrationEmailFromEmail;
	private String registrationEmailFromName;
	private String forgottenEmailSubject;
	private String forgottenEmailBody;
	private String forgottenEmailFromEmail;
	private String forgottenEmailFromName;
	private String unid;

	public static ControlPanel get() {
		FacesContext context = FacesContext.getCurrentInstance();
		ControlPanel bean = (ControlPanel) context.getApplication().getVariableResolver()
				.resolveVariable(context, BEAN_NAME);
		return bean;
	}
	
	public ControlPanel() throws NotesException{
		init();
	}
	
	@SuppressWarnings("unchecked")
	public void init() throws NotesException{
		Database database = getCurrentDatabase();
		View controlpanels = database.getView("Control Panels");
		Document controlpaneldoc = controlpanels.getFirstDocument();
		if (controlpaneldoc == null){
			controlpaneldoc = database.createDocument();
			controlpaneldoc.replaceItemValue("Form", "ControlPanel");
			controlpaneldoc.computeWithForm(false, false);
			controlpaneldoc.save();
		}
		this.setUnid(controlpaneldoc.getUniversalID());
		this.setRegistrationNAB(controlpaneldoc.getItemValueString("RegistrationNAB"));
		this.setRegistrationUsersGroup(controlpaneldoc.getItemValueString("RegistrationUsersGroup"));
		this.setRegistrationEmailSubject(controlpaneldoc.getItemValueString("RegistrationEmailSubject"));
		this.setRegistrationEmailBody(controlpaneldoc.getItemValueString("RegistrationEmailBody"));
		this.setRegistrationEmailFromEmail(controlpaneldoc.getItemValueString("RegistrationEmailFromEmail"));
		this.setRegistrationEmailFromName(controlpaneldoc.getItemValueString("RegistrationEmailFromName"));
		this.setForgottenEmailSubject(controlpaneldoc.getItemValueString("ForgottenEmailSubject"));
		this.setForgottenEmailBody(controlpaneldoc.getItemValueString("ForgottenEmailBody"));
		this.setForgottenEmailFromEmail(controlpaneldoc.getItemValueString("ForgottenEmailFromEmail"));
		this.setForgottenEmailFromName(controlpaneldoc.getItemValueString("ForgottenEmailFromname"));
		controlpaneldoc.recycle();
		controlpanels.recycle();
	}
	
	private Database getCurrentDatabase() {
		NotesContext nc = NotesContext.getCurrentUnchecked();
		return (null != nc) ? nc.getCurrentDatabase() : null;
	}

	public String getRegistrationNAB() {
		return registrationNAB;
	}

	public void setRegistrationNAB(String registrationNAB) {
		this.registrationNAB = registrationNAB;
	}

	public String getRegistrationUsersGroup() {
		return registrationUsersGroup;
	}

	public void setRegistrationUsersGroup(String registrationUsersGroup) {
		this.registrationUsersGroup = registrationUsersGroup;
	}

	public void setUnid(String unid) {
		this.unid = unid;
	}

	public String getUnid() {
		return unid;
	}
	
	public String getRegistrationEmailSubject() {
		return registrationEmailSubject;
	}

	public void setRegistrationEmailSubject(String registrationEmailSubject) {
		this.registrationEmailSubject = registrationEmailSubject;
	}

	public String getRegistrationEmailBody() {
		return registrationEmailBody;
	}

	public void setRegistrationEmailBody(String registrationEmailBody) {
		this.registrationEmailBody = registrationEmailBody;
	}

	public String getRegistrationEmailFromEmail() {
		return registrationEmailFromEmail;
	}

	public void setRegistrationEmailFromEmail(String registrationEmailFromEmail) {
		this.registrationEmailFromEmail = registrationEmailFromEmail;
	}

	public String getRegistrationEmailFromName() {
		return registrationEmailFromName;
	}

	public void setRegistrationEmailFromName(String registrationEmailFromName) {
		this.registrationEmailFromName = registrationEmailFromName;
	}

	public String getForgottenEmailSubject() {
		return forgottenEmailSubject;
	}

	public void setForgottenEmailSubject(String forgottenEmailSubject) {
		this.forgottenEmailSubject = forgottenEmailSubject;
	}

	public String getForgottenEmailBody() {
		return forgottenEmailBody;
	}

	public void setForgottenEmailBody(String forgottenEmailBody) {
		this.forgottenEmailBody = forgottenEmailBody;
	}

	public String getForgottenEmailFromEmail() {
		return forgottenEmailFromEmail;
	}

	public void setForgottenEmailFromEmail(String forgottenEmailFromEmail) {
		this.forgottenEmailFromEmail = forgottenEmailFromEmail;
	}

	public String getForgottenEmailFromName() {
		return forgottenEmailFromName;
	}

	public void setForgottenEmailFromName(String forgottenEmailFromName) {
		this.forgottenEmailFromName = forgottenEmailFromName;
	}
}
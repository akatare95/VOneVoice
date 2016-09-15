/**
 * 
 */
package com.vzw.onevoice.util;

import java.util.ArrayList;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.vzw.onevoice.dbentity.AbstractBaseDBEntity;
import com.vzw.onevoice.dto.base.AbstractBaseDTO;

/**
 * The default mapper class, uses the Dozer library to map classes
 * 
 * @author c0bhan3
 * @version 1.0
 * 
 */
@Component
public class DefaultEntityConvertor {

	@Autowired
	private DozerBeanMapper dozer;

	public DefaultEntityConvertor() {
		//
	}

	/**
	 * @param entity
	 * @param domainClass
	 * @return
	 */
	public <T extends AbstractBaseDBEntity> T mapDTOToDomain(
			AbstractBaseDTO entity, Class<T> domainClass) {
		return dozer.map(entity, domainClass);
	}

	/**
	 * @param domain
	 * @param entityClass
	 * @return
	 */
	public <E extends AbstractBaseDTO> E mapDomainToDTO(
			AbstractBaseDBEntity domain, Class<E> entityClass) {
		return dozer.map(domain, entityClass);
	}

	/**
	 * @param entity
	 * @param domainClass
	 * @return
	 */
	public <E extends AbstractBaseDTO, T extends AbstractBaseDBEntity> List<E> mapDomainObjectListToDTOList(
			List<T> entityObjects, Class<T> domainClass, Class<E> dtoClass) {
		final List<E> dtEs = new ArrayList<E>();
		for (final AbstractBaseDBEntity domainObject : entityObjects) {
			dtEs.add(dozer.map(domainObject, dtoClass));
		}
		return dtEs;
	}
}
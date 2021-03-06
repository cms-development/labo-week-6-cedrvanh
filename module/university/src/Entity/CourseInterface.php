<?php

namespace Drupal\university\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Course entities.
 *
 * @ingroup university
 */
interface CourseInterface extends ContentEntityInterface, EntityChangedInterface, EntityOwnerInterface {

  // Add get/set methods for your configuration properties here.

  /**
   * Gets the Course name.
   *
   * @return string
   *   Name of the Course.
   */
  public function getName();

  /**
   * Sets the Course name.
   *
   * @param string $name
   *   The Course name.
   *
   * @return \Drupal\university\Entity\CourseInterface
   *   The called Course entity.
   */
  public function setName($name);

  /**
   * Gets the Course creation timestamp.
   *
   * @return int
   *   Creation timestamp of the Course.
   */
  public function getCreatedTime();

  /**
   * Sets the Course creation timestamp.
   *
   * @param int $timestamp
   *   The Course creation timestamp.
   *
   * @return \Drupal\university\Entity\CourseInterface
   *   The called Course entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Returns the Course published status indicator.
   *
   * Unpublished Course are only visible to restricted users.
   *
   * @return bool
   *   TRUE if the Course is published.
   */
  public function isPublished();

  /**
   * Sets the published status of a Course.
   *
   * @param bool $published
   *   TRUE to set this Course to published, FALSE to set it to unpublished.
   *
   * @return \Drupal\university\Entity\CourseInterface
   *   The called Course entity.
   */
  public function setPublished($published);

}
